import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller, useWatch, Form } from 'react-hook-form';
import { MenuSelectCountries } from '@components/MenuSelectCountries';

const UserLogin = () => {
  const [data, setData] = useState({})
  const { register, control, handleSubmit, getValues, setValue, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
    setData(data);
    return
  };
  const handleCountrySelection = (selectedCountry: any) => {
    setValue('country', selectedCountry);
  };
  const { username, email, password, confirmPassword, country } = getValues();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Controller
        name='username'
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
            placeholder="Digite seu nome"
          />
        )}
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
      {errors.email && <Text style={styles.error}>{`${errors.email.message}`}</Text>}
      
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
      {errors.password && <Text style={styles.error}>{`${errors.password.message}`}</Text>} 
      
      <Text style={styles.label}>Confirmar Senha:</Text>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onChangeText={field.onChange}
            value={field.value}
            placeholder="Confirme sua senha"
            secureTextEntry
          />
        )}
        name="confirmPassword"
        rules={{
          required: 'A confirmação de senha é obrigatória',
          validate: (value) => value === password || 'As senhas não coincidem',
        }}
        defaultValue=""
      />
      {errors.confirmPassword && <Text style={styles.error}>{`${errors.confirmPassword.message}`}</Text>}
      <Controller
        control={control}
        render={() => (
          <MenuSelectCountries
            onSelectCountry={handleCountrySelection}
           />  
        )}
        name="country"
        rules={{ required: 'Country is required' }}
        defaultValue=""
      />
      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      <Text>{[username, email, password, confirmPassword, country]}</Text>
      <Text>Data:</Text>
      <Text>{JSON.stringify(data)}</Text>


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
