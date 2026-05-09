import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usarAutenticacao } from '@/context/Autenticacao';
import { styles } from '@/components/Menu.styles';

export default function MenuScreen() {
  const router = useRouter();
  const { estaLogado, usuario, sair } = usarAutenticacao();

  const lidarComSair = () => {
    Alert.alert(
      "Sair da Conta",
      "Deseja realmente desconectar?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          style: "destructive", 
          onPress: async () => {
            await sair();
            router.replace('/(tabs)');
          } 
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.cabecalhoPerfil}>
        <View style={styles.avatar}>
          <MaterialCommunityIcons 
            name={estaLogado ? "account" : "account-off"} 
            size={50} 
            color="#2D6A4F" 
          />
        </View>
        <View>
          <Text style={styles.nomeUsuario}>
            {estaLogado ? (usuario ?.displayName || usuario ?.email?.split('@')[0] || "Usuário") : "Visitante"}
          </Text>
          <Text style={styles.subtitulo}>
            {estaLogado ? usuario ?.email : "Acesse sua conta para gerenciar"}
          </Text>
        </View>
      </View>

      <View style={styles.divisor} />

      {/* Seção de Opções */}
      <View style={styles.secaoOpcoes}>
        <TouchableOpacity style={styles.opcaoMenu}>
          <MaterialCommunityIcons name="heart-outline" size={24} color="#333" />
          <Text style={styles.textoOpcao}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcaoMenu}>
          <MaterialCommunityIcons name="account-circle-outline" size={24} color="#333" />
          <Text style={styles.textoOpcao}>Minha Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcaoMenu}>
          <MaterialCommunityIcons name="star-outline" size={24} color="#333" />
          <Text style={styles.textoOpcao}>Avaliações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcaoMenu}>
          <MaterialCommunityIcons name="cog-outline" size={24} color="#333" />
          <Text style={styles.textoOpcao}>Configurações</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Sair ou Entrar */}
      <View style={styles.rodapeMenu}>
        {estaLogado ? (
          <TouchableOpacity style={[styles.opcaoMenu, styles.botaoSair]} onPress={lidarComSair}>
            <MaterialCommunityIcons name="logout" size={24} color="#FF4444" />
            <Text style={[styles.textoOpcao, { color: '#FF4444' }]}>Sair da Conta</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={[styles.opcaoMenu, styles.botaoEntrar]} 
            onPress={() => router.push('/login' as any)}
          >
            <MaterialCommunityIcons name="login" size={24} color="#2D6A4F" />
            <Text style={[styles.textoOpcao, { color: '#2D6A4F' }]}>Entrar no ReUse</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}