import { ProductItem } from '@/components/ProductCard';

export const HARDWARE_DATA: ProductItem[] = [ 
  //GPUs
  { 
    id: '1', 
    title: 'Placa de Vídeo RTX 3060', 
    category: 'GPU',
    rating: 4.8, 
    status: 'Usado', 
    price: 'R$ 1.600', 
    description: '12GB GDDR6, Pasta térmica já trocada.',
    image: require('@/assets/images/gpu.jpg') 
  },

  { 
    id: '2', 
    title: 'Placa de Vídeo RTX 5060 8GB', 
    category: 'GPU',
    rating: 4.5, 
    status: 'Usado', 
    price: 'R$ 2.300', 
    description: '8GB, 4 meses de uso, acompanha caixa original',
    image: require('@/assets/images/gpu5060.jpg') 
  }, 

  { 
    id: '3', 
    title: 'Placa de Vídeo Radeon 6800xt Red devil 16gb', 
    category: 'GPU',
    rating: 4.7, 
    status: 'Usado', 
    price: 'R$ 2.700', 
    description: 'Radeon 6800xt 16GB, Semi-nova em ótimo estado',
    image: require('@/assets/images/gpu6800xt.jpg') 
  },

  { 
    id: '4', 
    title: 'Placa de Vídeo Nvidia galax RTX 2060 Oc edition 12GB', 
    category: 'GPU',
    rating: 4.4, 
    status: 'Usado', 
    price: 'R$ 1.800', 
    description: 'Placa Nvidia galax rtx 2060 12GB usada em excelentes condições',
    image: require('@/assets/images/gpu2060.jpg') 
  },
  //Memórias
  { 
    id: '5', 
    title: 'Memória RAM 16GB', 
    category: 'Memory',
    rating: 5.0, 
    status: 'Novo', 
    price: 'R$ 380', 
    description: 'DDR4 3200MHz, dual channel, tudo funcionando.',
    image: require('@/assets/images/ram.jpg')
  },
  { 
    id: '6', 
    title: 'Memória Corsair vengeance LPX 16gb (2x 8gb) DDR4 3200hz', 
    category: 'Memory',
    rating: 4.5, 
    status: 'Usado', 
    price: 'R$ 760', 
    description: 'Dois pentes de memória 8gb usados mas funcionando perfeitamente',
    image: require('@/assets/images/memoryvengeance16.jpg') 
  }, 

  { 
    id: '7', 
    title: 'Memória XPG Gammix D35 RGB 16gb DDR4 3200hz', 
    category: 'Memory',
    rating: 4.8, 
    status: 'Novo', 
    price: 'R$ 890', 
    description: 'Memória XPG Gammix D35 RGB 16GB (1x16GB) DDR4 3200MHz - NOVA',
    image: require('@/assets/images/memoryXPG.jpg') 
  },
  { 
    id: '8', 
    title: 'Memória Kingston Fury Beast RGB 16GB DDR4 3200MHz', 
    category: 'Memory',
    rating: 4.7, 
    status: 'Novo', 
    price: 'R$ 1.100', 
    description: 'Memória nova, lacrada e na caixa original!',
    image: require('@/assets/images/memorykingston.jpg') 
  },

  //Processadores
  { 
    id: '9', 
    title: 'Processador Intel i5 geração8',
    category: 'CPU', 
    rating: 4.0, 
    status: 'Usado', 
    price: 'R$ 200', 
    description: 'Processador testado e aprovado, não estou usando mais, por isso estou me desfazendo',
    image: require('@/assets/images/processador.jpg') 
  },

  { 
    id: '11', 
    title: 'Processador i7 6800k socket 2011 ddr4', 
    category: 'CPU',
    rating: 4.8, 
    status: 'Usado', 
    price: 'R$ 1,000', 
    description: 'Processador usado mas que ainda mantém um bom desempenho',
    image: require('@/assets/images/cpuI76800k.jpg') 
  }, 

  { 
    id: '12', 
    title: 'Procesador AMD Ryzen 7 5700X', 
    category: 'CPU',
    rating: 5.0, 
    status: 'Novo', 
    price: 'R$ 1.100', 
    description: 'Processador novo lacrado, ótimo para jogos e renderização de videos',
    image: require('@/assets/images/cpuryzen7.jpg') 
  },
  { 
    id: '13', 
    title: 'Processador Intel i9 14900k', 
    category: 'CPU',
    rating: 4.9, 
    status: 'Usado', 
    price: 'R$ 2.600', 
    description: 'Cpu com cerca de 1 ano e meio de uso, funcionando perfeitamente',
    image: require('@/assets/images/cpuI914900k.jpg') 
  },

  //DOAÇÕES
  { 
    id: '14',
    title: 'Gabinete CoolerMaster HAF 942 black Full Tower', 
    category: 'Donation',
    rating: 3.5, 
    status: 'Doação', 
    price: 'R$ 0', 
    description: 'Estou doando meu Gabinete CoolerMaster, apresenta falha nas ventoinhas',
    image: require('@/assets/images/gabinete.jpg') 
  },

  {
    id: '15', 
    title: 'Teclado mecânico redragon" (Com defeito)', 
    category: 'Donation',
    rating: 2.5, 
    status: 'Doação', 
    price: 'R$ 0', 
    description: 'Estou doando pois os switches da parte da esquerda estão com defeito e não quero fazer manutenção',
    image: require('@/assets/images/Teclado.jpg') 
  },

  {
    id: '16', 
    title: 'PC com Placa de Vídeo', 
    category: 'Donation',
    rating: 3.0, 
    status: 'Doação', 
    price: 'R$ 0', 
    description: 'Pc para uso básico, estou doando pois não uso mais',
    image: require('@/assets/images/pc_antigo.jpg') 
  },
  {
    id: '17', 
    title: 'Fonte de Pc gamer funcionando', 
    category: 'Donation',
    rating: 2.3, 
    status: 'Doação', 
    price: 'R$ 0', 
    description: 'Pc para uso básico, estou doando pois não uso mais',
    image: require('@/assets/images/fonte.jpg') 
  },


];