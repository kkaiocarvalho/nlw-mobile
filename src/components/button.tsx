import React from "react"
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    ActivityIndicator,
    StyleSheet 
  } from "react-native"
  
  type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
  }
  
  export function Button({ title, isLoading = false, ...rest }: Props) {
    return (
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        disabled={isLoading}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator className="text-green-500" />
        ) : (
          <Text className="text-green-500 text-base font-bold uppercase">
            {title}
          </Text>
        )}
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#F48F56",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
 
});

{/*
Este é um componente de botão (Button) de um aplicativo React Native. Ele recebe um título e um estado de carregamento como propriedades. Quando o botão está em estado de carregamento, ele exibe um indicador de atividade. Caso contrário, ele exibe o título do botão. O botão é desabilitado quando está em estado de carregamento. O botão tem um estilo definido que inclui uma largura de 100%, uma altura de 50, uma cor de fundo “#F48F56”, e o conteúdo do botão é centralizado tanto horizontalmente quanto verticalmente. Os cantos do botão são arredondados.
*/}