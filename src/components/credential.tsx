import React from "react";
import { Image, View, ImageBackground, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from "react-native";

import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors";

import { QRCode } from "@/components/qrcode";
import { BadgeStore } from "@/store/badge-store";

import { MotiView } from "moti";

type Props = {
    data: BadgeStore
    //image?: string 
    onChangeAvatar?: () => void
    onExpandQRCode?: () => void
}

export function Credential({data ,onChangeAvatar, onExpandQRCode, /*image*/ }: Props){
    
    const { height } = useWindowDimensions()

    return(

        <MotiView 
        className="w-full self-stretch items-center"
        from={{ opacity: 0.5, translateY:  -height, rotateZ: "50deg", rotateY: "30deg", rotateX: "30deg"}}
        animate={{ opacity: 1, translateY: 0, rotateZ: "0deg", rotateY: "0deg", rotateX: "0deg" }}
        transition={{ /*duration: 2000,*/ type: "spring", damping: 20, rotateZ:{damping: 15, mass: 3}  }}
        >
            <Image 
                source={require("@/assets/ticket/band.png")}
                className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">

                <ImageBackground 
                    source={require("@/assets/ticket/header.png")}
                    className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
                >
                    <View className="w-full flex-row items-center justify-between">
                    <Text className="text-zinc-50 text-sm font-bold"> {data.eventTitle} </Text>
                    <Text className="text-zinc-50 text-sm font-bold"> #{data.id} </Text>
                    </View>
                    <View className="w-40 h-40 bg-black rounded-full"/>
                </ImageBackground>

                {/*image*/ data.image ? (  
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={onChangeAvatar}>
                        <Image 
                        source={{ uri: data.image /*image*/}}
                        className="w-36 h-36 rounded-full -mt-24" />
                    </TouchableOpacity>

                ) : ( 

                    <TouchableOpacity activeOpacity={0.8} style={{width: 124,
                        height: 124,
                        borderRadius: 9999,
                        marginTop: -82,
                        backgroundColor: '#C4C4CC',
                        alignItems: 'center',
                        justifyContent: 'center',}}
                        onPressOut={onChangeAvatar}
                        >
                        <Feather 
                        name="camera" 
                        color={colors.green[400]} 
                        size={32}
                        />
                    </TouchableOpacity>
                )}

                <Text className="font-bold text-2xl text-zinc-50 mt-4">
                    {data.name}
                </Text>

                <Text className="font-regular text-base  text-zinc-300 mb-4">
                    {data.email}
                </Text>

                {/*<Image source={require("@/assets/ticket/qrcode.png")} 
                    className="w-32 h-32"
                    />*/}

                <QRCode value={data.checkInURL} size={120} />

                <TouchableOpacity 
                    activeOpacity={0.7} 
                    style={{marginTop: 20, padding:10}}
                    onPress={onExpandQRCode}
                >
                    <Text className="font-bold text-orange-500 text-xl">Ampliar QRCode</Text>
                </TouchableOpacity>
            </View>
        </MotiView>
    )
}
