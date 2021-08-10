export const adverts: {
  [id: string]: {
    id: string
    usableAreas: number
    parkingSpaces: number
    images: string[]
    address: {
      city: string
      neighborhood: string
      location: {
        lon: number
        lat: number
      }
    }
    bathrooms: number
    bedrooms: number
    pricingInfos: {
      yearlyIptu: string
      price: string
      rentalTotalPrice?: string
      businessType: 'SALE' | 'RENTAL'
      monthlyCondoFee: string
    }
  }
} = {
  '7baf2775d4a2': {
    id: '7baf2775d4a2',
    usableAreas: 70,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg',
    ],
    address: { city: '', neighborhood: '', location: { lon: 0, lat: 0 } },
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '60',
      price: '276000',
      businessType: 'SALE',
      monthlyCondoFee: '0',
    },
  },
  a0f9d9647551: {
    id: 'a0f9d9647551',
    usableAreas: 69,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
    ],
    address: {
      city: '',
      neighborhood: '',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '0',
      price: '405000',
      businessType: 'SALE',
      monthlyCondoFee: '495',
    },
  },
  fed26dbe5881: {
    id: 'fed26dbe5881',
    usableAreas: 77,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Campo Belo',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '810',
      price: '3500',
      rentalTotalPrice: '4440',
      businessType: 'RENTAL',
      monthlyCondoFee: '940',
    },
  },
  '1106a85a38fa': {
    id: '1106a85a38fa',
    usableAreas: 75,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Brooklin',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '100',
      price: '2200',
      rentalTotalPrice: '3300',
      businessType: 'RENTAL',
      monthlyCondoFee: '1100',
    },
  },
  '548289d0d1df': {
    id: '548289d0d1df',
    usableAreas: 45,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Jardim Íris',
      location: { lon: -46.723175, lat: -23.501005 },
    },
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '0',
      price: '1200',
      rentalTotalPrice: '1460',
      businessType: 'RENTAL',
      monthlyCondoFee: '260',
    },
  },
  f03b84560320: {
    id: 'f03b84560320',
    usableAreas: 75,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Vila Brasilio Machado',
      location: { lon: -46.614014, lat: -23.609441 },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '0',
      price: '480000',
      businessType: 'SALE',
      monthlyCondoFee: '590',
    },
  },
  a4592d14a531: {
    id: 'a4592d14a531',
    usableAreas: 120,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Vila Moinho Velho',
      location: { lon: -46.601979, lat: -23.609364 },
    },
    bathrooms: 3,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '266',
      price: '620000',
      businessType: 'SALE',
      monthlyCondoFee: '1250',
    },
  },
  '2c60c7c4ddb2': {
    id: '2c60c7c4ddb2',
    usableAreas: 173,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Chácara Inglesa',
      location: { lon: -46.633391, lat: -23.609135 },
    },
    bathrooms: 0,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '0',
      price: '1050000',
      businessType: 'SALE',
      monthlyCondoFee: '0',
    },
  },
  bdcdfcc6cdd5: {
    id: 'bdcdfcc6cdd5',
    usableAreas: 97,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Bosque da Saúde',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '0',
      price: '800000',
      businessType: 'SALE',
      monthlyCondoFee: '0',
    },
  },
  c4f6894e7b95: {
    id: 'c4f6894e7b95',
    usableAreas: 54,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Cidade Monções',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 2,
    bedrooms: 0,
    pricingInfos: {
      yearlyIptu: '538',
      price: '2190',
      rentalTotalPrice: '3327',
      businessType: 'RENTAL',
      monthlyCondoFee: '1137',
    },
  },
  '0b021863e09e': {
    id: '0b021863e09e',
    usableAreas: 63,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Paraisópolis',
      location: { lon: -46.72602, lat: -23.609625 },
    },
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '60',
      price: '450000',
      businessType: 'SALE',
      monthlyCondoFee: '365',
    },
  },
  d8849cae5766: {
    id: 'd8849cae5766',
    usableAreas: 103,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Vila Suzana',
      location: { lon: -46.732226, lat: -23.609952 },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '0',
      price: '4990',
      rentalTotalPrice: '4990',
      businessType: 'RENTAL',
      monthlyCondoFee: '0',
    },
  },
  '98372a94f973': {
    id: '98372a94f973',
    usableAreas: 94,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Morumbi',
      location: { lon: -46.737969, lat: -23.6095 },
    },
    bathrooms: 4,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '0',
      price: '540000',
      businessType: 'SALE',
      monthlyCondoFee: '650',
    },
  },
  '2a464ec47d85': {
    id: '2a464ec47d85',
    usableAreas: 112,
    parkingSpaces: 2,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Vila Gumercindo',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      yearlyIptu: '3000',
      price: '1180000',
      businessType: 'SALE',
      monthlyCondoFee: '800',
    },
  },
  bf023087ee44: {
    id: 'bf023087ee44',
    usableAreas: 48,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Vila Suzana',
      location: { lon: -46.735385, lat: -23.609262 },
    },
    bathrooms: 1,
    bedrooms: 1,
    pricingInfos: {
      yearlyIptu: '135',
      price: '350000',
      businessType: 'SALE',
      monthlyCondoFee: '660',
    },
  },
  '49a82fe156b6': {
    id: '49a82fe156b6',
    usableAreas: 67,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Vila Brasílio Machado',
      location: { lon: -46.613805, lat: -23.609649 },
    },
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '80',
      price: '460000',
      businessType: 'SALE',
      monthlyCondoFee: '650',
    },
  },
  '72bafc940a07': {
    id: '72bafc940a07',
    usableAreas: 49,
    parkingSpaces: 1,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
    ],
    address: {
      city: 'São Paulo',
      neighborhood: 'Fazenda Morumbi',
      location: { lon: -46.659002, lat: -23.553518 },
    },
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      yearlyIptu: '0',
      price: '220000',
      businessType: 'SALE',
      monthlyCondoFee: '323',
    },
  },
}
