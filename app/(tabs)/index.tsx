import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from '@/components/ProductCard';
import { styles } from '@/components/Home.styles';
import { HARDWARE_DATA } from '@/components/Products';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SectionHeader = ({ title, onMorePress }: { title: string, onMorePress?: () => void }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {onMorePress && (
      <TouchableOpacity onPress={onMorePress}>
        <Text style={styles.seeMore}>Ver tudo</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default function HomeScreen() {
  const router = useRouter();
  const [meusAnuncios, setMeusAnuncios] = useState([]);

  const carregarAnuncios = async () => {
    try {
      const json = await AsyncStorage.getItem('@reuse_hardware');
      if (json) setMeusAnuncios(JSON.parse(json));
    } catch (e) {
      console.error(e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarAnuncios();
    }, [])
  );

  const excluirAnuncio = (id: string) => {
    Alert.alert("Excluir", "Remover este item?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", style: "destructive", onPress: async () => {
          const novaLista = meusAnuncios.filter((item: any) => item.id !== id);
          setMeusAnuncios(novaLista);
          await AsyncStorage.setItem('@reuse_hardware', JSON.stringify(novaLista));
      }}
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={require('@/assets/images/icon.png')} style={styles.logoHeader} />
          <View style={styles.searchSection}>
            <TextInput style={styles.input} placeholder="Pesquisar no ReUse..." />
          </View>
          <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
        </View>

        <View style={styles.welcome}>
          <Image source={require('@/assets/images/seja_bem_vindo.gif')} style={styles.banner} />
        </View>

        <SectionHeader title="Meus Anúncios Recentes" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 20 }}>
          {meusAnuncios.map((item: any) => (
            <View key={item.id} style={{ width: 160, marginRight: 15, position: 'relative' }}>
              <ProductCard item={item} />
              <TouchableOpacity style={styles.btnApagarCard} onPress={() => excluirAnuncio(item.id)}>
                <MaterialCommunityIcons name="delete-outline" size={18} color="#FF5252" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <SectionHeader title="Mais Populares" />
        <View style={styles.grid}> {HARDWARE_DATA.map(item => (
        <View key={item.id} style={styles.gridItem}>
        <ProductCard item={item} />
        </View>
        ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity 
        style={styles.fabAnunciar} 
        onPress={() => {
        const estaLogado = false; 
          if (estaLogado) {
          router.push('/cadastro');
          } else {
          router.push('../login');
          }
  }}
>
      <MaterialCommunityIcons name="plus" size={24} color="#FFF" />
        <Text style={styles.fabText}>ANUNCIAR</Text>
          </TouchableOpacity>
            </SafeAreaView>
  );
}