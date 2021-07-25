import React from "react"
import { Box, Center, NativeBaseProvider } from "native-base"

export const Example = () => {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0],
        },
      }}
      p={12}
      rounded="lg"
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      This is a Box with Linear Gradient
    </Box>
  )
}

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').LinearGradient
  }
}

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}