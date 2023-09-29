import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const UserLogin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
            placeholder="Digite seu nome"
          />
        )}
        name="username"
        defaultValue=""
      />
      <Text style={styles.label}>Email:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
            placeholder="Digite seu email"
          />
        )}
        name="email"
        rules={{
          required: 'O email é obrigatório',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Email inválido',
          },
        }}
        defaultValue=""
      />
    {errors.email && <Text style={styles.error}>{errors.email.message ? errors.email.message.toString() : ""}</Text>}

      <Text style={styles.label}>Senha:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
            placeholder="Digite sua senha"
            secureTextEntry
          />
        )}
        name="password"
        rules={{
          required: 'A senha é obrigatória',
          minLength: {
            value: 6,
            message: 'A senha deve ter pelo menos 6 caracteres',
          },
        }}
        defaultValue=""
      />
        {errors.email && <Text style={styles.error}>{errors.email.message ? errors.email.message.toString() : ""}</Text>}


      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
});

export default UserLogin;
