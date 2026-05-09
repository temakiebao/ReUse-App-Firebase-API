import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/components/ProductCard.styles';

export interface ProductItem {
  category: string;
  id: string;
  title: string;
  rating: number;
  status: 'Novo' | 'Usado' | 'Doação';
  price: string;
  description: string;
  image: any; 
}

interface Props {
  item: ProductItem;
}

export default function ProductCard({ item }: Props) {
  return (
    <View style={styles.card}>
        {/*A imagem do produto*/}
      <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.img} 
/>
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>

      {/*Avaliação e Estado dos produtos*/}
      <View style={styles.row}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
    
        {/*Mini descrição*/}
      <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>

        {/*Botão e os preços*/}
      <View style={styles.row}>
        <Text style={styles.price}>
  {(() => {
    
    const rawPrice = typeof item.price === 'string' 
      ? Number(item.price.replace(/[^\d.,]/g, '').replace('.', '').replace(',', '.')) 
      : item.price;

    return new Intl.NumberFormat('pt-BR', { 
      style: 'currency', 
      currency: 'BRL' 
    }).format(rawPrice || 0);
  })()}
</Text>
      </View>
    </View>
  );
}