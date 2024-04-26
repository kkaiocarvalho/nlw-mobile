import React, { useState } from 'react';
import { View, Image, StatusBar, Alert, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, Redirect } from 'expo-router';

import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { colors } from '@/styles/colors';

import { api } from '@/server/api';
import { useBadgeStore } from '@/store/badge-store';

export default function Home() {

    const [isLoading, setIsLoading] = useState(false);

    const [code, setCode] = useState("")

    const badgeStore = useBadgeStore()
    //console.log("DADOS => ", badgeStore.data)

    async function handleAccessCredential(){
        try{
            if(!code.trim()){
                return Alert.alert('Ingresso', 'Informe o código do ingresso!')
            }
            setIsLoading(true)

            const {data} = await api.get(`/attendees/${code}/badge`)
            badgeStore.save(data.badge)

        } catch(error) {
            console.log(error)
            setIsLoading(false)
            Alert.alert("Ingresso", "Ingresso não encontrado!")
        }
    }
    if(badgeStore.data?.checkInURL){
        return <Redirect href={"/ticket"} />
    }
    return (
        <View className='flex-1 bg-green-500 items-center justify-center p-8'>
            <StatusBar barStyle='light-content' />
            <Image source={require("@/assets/logo.png")} className='h-16' resizeMode='contain' />
            <View className='w-full mt-12 gap-3'>
                <Input>
                <MaterialCommunityIcons
                name='ticket-confirmation-outline'
                size={20}
                color={colors.green[200]}
                />
                    <Input.Field 
                        placeholder='Código do Ingresso' 
                        onChangeText={setCode}
                        keyboardType='numeric'
                        />  
                </Input>
                <Button
                    title="Acessar credencial"
                    isLoading={isLoading}
                    onPress={handleAccessCredential}
                />
                <Link href={"/register"} className='text-gray-100 text-base font-bold text-center mt-8'>
                    Ainda não possui ingresso?
                </Link>
            </View>
        </View>
    )
}


{/*
Este é um componente de tela inicial (Home) de um aplicativo React Native. Ele contém um campo de entrada para o usuário inserir o código do ingresso e um botão para acessar a credencial. Se o usuário ainda não possui um ingresso, ele pode clicar no link para ir para a página de registro. O estado isLoading é usado para controlar o estado de carregamento do botão. O ícone do ticket é exibido no campo de entrada para indicar que o usuário deve inserir o código do ingresso. A imagem do logo é exibida no topo da tela. A barra de status é definida para ter um estilo de conteúdo claro. A tela tem um fundo verde e os itens são centralizados.
*/}