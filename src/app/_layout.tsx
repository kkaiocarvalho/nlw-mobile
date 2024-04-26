import React from 'react';

import "@/styles/global.css";
import { Loading } from "@/components/loading";

import { Slot } from 'expo-router';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_500Medium,
        Roboto_400Regular
    });

    if(!fontsLoaded){
        return <Loading />
    }
    return <Slot/>   
}

{/*
Este é um componente de layout (Layout) de um aplicativo React Native. Ele usa o hook useFonts para carregar as fontes Roboto. Se as fontes ainda não foram carregadas, ele renderiza o componente Loading. Se as fontes foram carregadas, ele renderiza o componente Slot. O componente Slot é um componente do pacote expo-router que renderiza o componente correspondente à rota atual. Os estilos globais são importados no início do arquivo.
*/}