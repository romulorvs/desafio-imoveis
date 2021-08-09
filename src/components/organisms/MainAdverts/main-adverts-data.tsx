export const businessTypes = [
  { id: 'buy', label: 'Comprar' },
  { id: 'rent', label: 'Alugar' },
  { id: 'both', label: 'Ambos' },
]

export const sortValues = [
  { id: 'default', label: 'Ordem de Relevância' },
  { id: 'price', label: 'Menor Preço' },
  { id: 'area', label: 'Área' },
]

export const adverts: Array<{
  id: string
  usableAreas: number
  images: string[]
  bathrooms: number
  bedrooms: number
  pricingInfos: {
    price: string
    businessType: 'SALE' | 'RENTAL'
  }
}> = [
  {
    id: '7baf2775d4a2',
    usableAreas: 70,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg',
    ],
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      price: '276000',
      businessType: 'SALE',
    },
  },

  {
    id: 'a0f9d9647551',
    usableAreas: 69,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
    ],
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      price: '405000',
      businessType: 'SALE',
    },
  },

  {
    id: 'fed26dbe5881',
    usableAreas: 77,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
    ],
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      price: '3500',
      businessType: 'RENTAL',
    },
  },

  {
    id: '1106a85a38fa',
    usableAreas: 75,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
    ],
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      price: '2200',
      businessType: 'RENTAL',
    },
  },

  {
    id: '548289d0d1df',
    usableAreas: 45,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
    ],
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      price: '1200',
      businessType: 'RENTAL',
    },
  },

  {
    id: 'f03b84560320',
    usableAreas: 75,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg',
    ],
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      price: '480000',
      businessType: 'SALE',
    },
  },

  {
    id: 'a4592d14a531',
    usableAreas: 120,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg',
    ],
    bathrooms: 3,
    bedrooms: 2,
    pricingInfos: {
      price: '620000',
      businessType: 'SALE',
    },
  },

  {
    id: '2c60c7c4ddb2',
    usableAreas: 173,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic3.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
    ],
    bathrooms: 0,
    bedrooms: 3,
    pricingInfos: {
      price: '1050000',
      businessType: 'SALE',
    },
  },

  {
    id: 'bdcdfcc6cdd5',
    usableAreas: 97,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic13.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg',
    ],
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      price: '800000',
      businessType: 'SALE',
    },
  },

  {
    id: 'c4f6894e7b95',
    usableAreas: 54,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic4.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic17.jpg',
    ],
    bathrooms: 2,
    bedrooms: 0,
    pricingInfos: {
      price: '2190',
      businessType: 'RENTAL',
    },
  },

  {
    id: '0b021863e09e',
    usableAreas: 63,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic16.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic15.jpg',
    ],
    bathrooms: 2,
    bedrooms: 3,
    pricingInfos: {
      price: '450000',
      businessType: 'SALE',
    },
  },

  {
    id: 'd8849cae5766',
    usableAreas: 103,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic10.jpg',
    ],
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      price: '4990',
      businessType: 'RENTAL',
    },
  },

  {
    id: '98372a94f973',
    usableAreas: 94,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic6.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic8.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
    ],
    bathrooms: 4,
    bedrooms: 2,
    pricingInfos: {
      price: '540000',
      businessType: 'SALE',
    },
  },

  {
    id: '2a464ec47d85',
    usableAreas: 112,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic5.jpg',
    ],
    bathrooms: 3,
    bedrooms: 3,
    pricingInfos: {
      price: '1180000',
      businessType: 'SALE',
    },
  },

  {
    id: 'bf023087ee44',
    usableAreas: 48,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic12.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic11.jpg',
    ],
    bathrooms: 1,
    bedrooms: 1,
    pricingInfos: {
      price: '350000',
      businessType: 'SALE',
    },
  },

  {
    id: '49a82fe156b6',
    usableAreas: 67,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic18.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic9.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
    ],
    bathrooms: 2,
    bedrooms: 2,
    pricingInfos: {
      price: '460000',
      businessType: 'SALE',
    },
  },

  {
    id: '72bafc940a07',
    usableAreas: 49,
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic14.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic19.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic20.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic1.jpg',
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic2.jpg',
    ],
    bathrooms: 1,
    bedrooms: 2,
    pricingInfos: {
      price: '220000',
      businessType: 'SALE',
    },
  },
]
