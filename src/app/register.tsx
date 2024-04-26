import React, { useState } from 'react';
import { View, Image, StatusBar, Alert } from 'react-native';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';

import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { colors } from '@/styles/colors';

import { api } from '@/server/api';

import { useBadgeStore } from "@/store/badge-store"
 
import axios from 'axios';

const EVENT_ID = "9e9bd979-9d10-4915-b339-3786b1634f33";


export default function Register() {

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const badgeStore = useBadgeStore()

    async function handleRegister(){
        try{
            if(!name.trim() || !email.trim()){
                return Alert.alert("Inscrição", "Preencha todos os campos!")
            }

            setIsLoading(true)

            const registerResponse = await api.post(`/events/${EVENT_ID}/attendees`, {name, email})

            if(registerResponse.data.attendeeId){

                const badgeResponse = await api.get(`/attendees/${registerResponse.data.attendeeId}/badge`)

                badgeStore.save(badgeResponse.data.badge)
                
                Alert.alert("Inscrição", "Inscrição realizada com sucesso!", [
                    { text: "OK", onPress: () => router.push('/ticket') }
                ])
            }
            } catch(error) {
                console.log(error)
                setIsLoading(false) 
                
                if(axios.isAxiosError(error)){
                    if(String(error.response?.data.message).includes("already registered")){
                        return Alert.alert("Incrição", "Este e-mail já está cadastrado!")
                    }
                }
                Alert.alert("Inscrição", "Não foi possível fazer a inscrição!")
            } 
    }

    return (
        <View className='flex-1 bg-green-500 items-center justify-center p-8'>
            <StatusBar barStyle='light-content' />
            <Image source={require("@/assets/logo.png")} className='h-16' resizeMode='contain' />
            <View className='w-full mt-12 gap-3'>

                <Input>
                <FontAwesome6
                    name='user-circle'
                    size={20}
                    color={colors.green[200]}
                />
                    <Input.Field 
                        placeholder='Nome completo'
                        onChangeText={setName}
                    />  
                </Input>

                <Input>
                <MaterialIcons
                    name='alternate-email'
                    size={20}
                    color={colors.green[200]}
                />
                    <Input.Field 
                        placeholder='E-mail' 
                        keyboardType='email-address'
                        onChangeText={setEmail}
                    />  
                </Input>

                <Button
                    title="Realizar Inscrição"
                    isLoading={isLoading}
                    onPress={handleRegister}
                />
                <Link href={"/"} 
                    className='text-gray-100 text-base font-bold text-center mt-8'>
                    Já possui ingresso?
                </Link>
            </View>
        </View>
    )
}

{/*
Este é um componente de tela de registro (Register) de um aplicativo React Native. Ele contém campos de entrada para o usuário inserir seu nome completo e e-mail, e um botão para realizar a inscrição. Se o usuário já possui um ingresso, ele pode clicar no link para voltar para a página inicial. O estado isLoading é usado para controlar o estado de carregamento do botão. Os ícones de usuário e e-mail são exibidos nos campos de entrada para indicar que o usuário deve inserir seu nome completo e e-mail, respectivamente. A imagem do logo é exibida no topo da tela. A barra de status é definida para ter um estilo de conteúdo claro. A tela tem um fundo verde e os itens são centralizados.
*/}