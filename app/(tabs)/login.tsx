import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { auth } from '@/context/firebaseConfig'; // Aqui importei o Firebase
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { styles } from '@/components/Login.styles';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const lidarComLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha.");
      return;
    }
    // Tenta logar no Firebase
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.replace('/(tabs)'); // Se deu certo, volta pra Home
    } catch (error: any) {
      Alert.alert("Erro no Login", "E-mail ou senha incorretos.");
    }
  };

  const lidarComCadastro = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha para cadastrar.");
      return;
    }
    if (senha.length < 6) {
      Alert.alert("Senha Curta", "A senha precisa ter no mínimo 6 caracteres no Firebase.");
      return;
    }
    try {
      // Tenta cadastrar no Firebase
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert("Sucesso", "Conta criada no ReUse!");
      router.replace('/(tabs)'); // Se deu certo, volta pra Home logado
    } catch (error: any) {
      Alert.alert("Erro", "Não foi possível criar a conta. Verifique o e-mail.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.conteudo}>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.titulo}>ReUse Marketplace</Text>
        <Text style={styles.subtitulo}>Acesse para negociar hardware.</Text>

        <TextInput 
          style={styles.campoInput} 
          placeholder="E-mail" 
          value={email} 
          onChangeText={setEmail} 
          autoCapitalize="none" 
          keyboardType="email-address"
        />
        <TextInput 
          style={styles.campoInput} 
          placeholder="Senha" 
          secureTextEntry 
          value={senha} 
          onChangeText={setSenha} 
        />

        <TouchableOpacity style={styles.botaoEntrar} onPress={lidarComLogin}>
          <Text style={styles.textoBotaoEntrar}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastrar} onPress={lidarComCadastro}>
          <Text style={styles.textoBotaoCadastrar}>CADASTRAR NOVA CONTA</Text>
        </TouchableOpacity>

        <View style={styles.divisor}>
          <View style={styles.linha} />
          <Text style={styles.textoDivisor}>OU</Text>
          <View style={styles.linha} />
        </View>
        
        <TouchableOpacity style={styles.botaoVisitante} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.textoBotaoVisitante}>Navegar como visitante</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}