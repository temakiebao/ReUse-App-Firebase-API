import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import { Tabs } from 'expo-router';
import React from 'react';
import { ProvedorAutenticacao } from '@/context/Autenticacao';

export default function TabLayout() {
  return (
    <ProvedorAutenticacao>
      <Tabs screenOptions={{ headerShown: false, tabBarButton: HapticTab }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="cadastro"
          options={{
            title: 'Anunciar',
            tabBarIcon: ({ color }) => <AntDesign size={26} name="plus-circle" color={color} />,
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: 'Menu',
            tabBarIcon: ({ color }) => <AntDesign size={24} name="menu" color={color} />,
          }}
        />

        <Tabs.Screen
          name="login"
          options={{ href: null }}
        />
      </Tabs>
    </ProvedorAutenticacao>
  );
}