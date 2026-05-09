import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usarAutenticacao } from '@/context/Autenticacao';
import { styles } from '@/components/Cadastro.styles';

export default function CadastroAnuncioScreen() {
  const router = useRouter();
  const { estaLogado } = usarAutenticacao();

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [regiao, setRegiao] = useState('');

  const publicar = () => {
    if (!nome || !valor || !regiao) {
      Alert.alert("Erro", "Preencha o nome, valor e região do item.");
      return;
    }
    Alert.alert("Sucesso", "Hardware postado com sucesso!", [{ text: "OK", onPress: () => router.replace('/(tabs)') }]);
  };

  if (!estaLogado) {
    return (
      <View style={styles.containerBloqueado}>
        <MaterialCommunityIcons name="lock-outline" size={70} color="#2D6A4F" />
        <Text style={styles.tituloBloqueado}>Acesso Restrito</Text>
        <Text style={styles.subtituloBloqueado}>Faça login para anunciar seus componentes.</Text>
        <TouchableOpacity style={styles.botaoLogin} onPress={() => router.push('/login' as any)}>
          <Text style={styles.textoBotaoLogin}>Entrar ou Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.titulo}>Novo Anúncio</Text>
        
        <TouchableOpacity style={styles.botaoFoto}>
          <MaterialCommunityIcons name="camera-plus-outline" size={40} color="#888" />
          <Text style={styles.textoBotaoFoto}>Adicionar Foto do Hardware</Text>
        </TouchableOpacity>

        <View style={styles.formulario}>
          <Text style={styles.label}>Nome do Item</Text>
          <TextInput style={styles.input} placeholder="Ex: Monitor Gamer 144Hz" value={nome} onChangeText={setNome} />

          <Text style={styles.label}>Valor (R$)</Text>
          <TextInput style={styles.input} placeholder="0,00" keyboardType="numeric" value={valor} onChangeText={setValor} />

          <Text style={styles.label}>Região / Cidade</Text>
          <TextInput style={styles.input} placeholder="Ex: São Paulo - Osasco" value={regiao} onChangeText={setRegiao} />

          <Text style={styles.label}>Descrição do Estado</Text>
          <TextInput 
            style={[styles.input, styles.inputArea]} 
            placeholder="Descreva detalhes técnicos e tempo de uso..." 
            multiline value={descricao} onChangeText={setDescricao} 
          />
        </View>
        
        <TouchableOpacity style={styles.botaoPublicar} onPress={publicar}>
          <Text style={styles.textoBotaoPublicar}>PUBLICAR NO INDEX</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}