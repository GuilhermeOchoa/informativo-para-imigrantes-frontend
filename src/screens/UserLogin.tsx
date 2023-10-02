import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller, useWatch, Form } from 'react-hook-form';
import { MenuSelectCountries } from '@components/MenuSelectCountries';
import { Button, ScrollView } from 'native-base';

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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastro de usuário</Text>
      <Text style={styles.subtitle}>Informações do usuário</Text>
      <Text style={styles.label}>Nome*</Text>
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
      
      <Text style={styles.label}>Email*</Text>
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
      
      <Text style={styles.label}>Senha*</Text>
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
      
      <Text style={styles.label}>Confirmar Senha*</Text>
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
      <Text style={styles.label}>Origem*</Text>
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
      <View style={styles.message}>
        <Entypo style={styles.icon} name="heart" size={24} color="#737373" />
        <View style={styles.messageText}>
          <Text style={styles.boldText}>Compromisso com sua privacidade</Text>
          <Text>
            <Text style={styles.boldText}>Seus dados não serão compartilhados com ninguém. </Text>
            Seu cadastro jamais será distribuído para instituições ou órgãos governamentais de qualquer tipo.
          </Text>
        </View>
      </View>
      <Button style={styles.button} onPress={handleSubmit(onSubmit)}>Finalizar cadastro</Button>
      <Text>{[username, email, password, confirmPassword, country]}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title:{
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#55917F',
    paddingHorizontal: 50,  
  },
  subtitle:{
    fontSize: 18,
    alignSelf: 'center',
    paddingBottom: 40,
    marginTop: 40,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
    color: "#A3A3A3"
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#55917F',
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
  message: {
    backgroundColor:'#E1F0C4',
    opacity: 0.6,
    color: '#404040',
    marginTop: 60,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    height: 120,
    wordWrap: 'break-word',
  },
  messageText: {
    display: 'flex',
    wordWrap: 'break-word',
    padding: 5,
  
  },
  icon: {
    padding: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#6BAB90',
    width: 150,
    height: 50,
    fontSize: 16,
    alignSelf: 'center',
    color: '#fff',
  }
});

export default UserLogin;
