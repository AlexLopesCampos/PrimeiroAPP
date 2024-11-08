import { StyleSheet, View } from 'react-native';

import { Form } from '@/components/Form/Form';
import { Triângulo } from '@/components/Form/Triângulo';

export default function HomeScreen() {
  return (
   /*<View>
    <Form></Form>
   </View>*/
   <View>
    <Triângulo></Triângulo>
   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
