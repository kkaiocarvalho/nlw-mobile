import React from "react"
import QRCodeSvg from "react-native-qrcode-svg"
import { colors } from "@/styles/colors"

type Props = {
    value: string
    size: number
}

export function QRCode(props: Props){
    return (
        <QRCodeSvg 
            value={props.value} 
            size={props.size} 
            color={colors.white} 
            backgroundColor="transparent"
        />)
}

{/* Outra forma de fazer props seria com desestruturação:
export function QRCode({value, size} : Props){
    return <QRCodeSvg value={value} size={size} />
}

*/}