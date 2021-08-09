import bathroomsImg from '_assets/bathrooms.svg'
import bedroomsImg from '_assets/bedrooms.svg'
import areaImg from '_assets/area.svg'
import parkingSpacesImg from '_assets/parking_spaces.svg'

export const statProps = {
  BATHROOMS: {
    src: bathroomsImg,
    small: {
      width: 12,
      height: 13,
    },
    normal: {
      width: 14,
      height: 16,
    },
  },
  BEDROOMS: {
    src: bedroomsImg,
    small: {
      width: 18,
      height: 12,
    },
    normal: {
      width: 22,
      height: 14,
    },
  },
  AREA: {
    src: areaImg,
    small: {
      width: 13,
      height: 13,
    },
    normal: {
      width: 16,
      height: 16,
    },
  },
  PARKING_SPACES: {
    src: parkingSpacesImg,
    small: {
      width: 13,
      height: 13,
    },
    normal: {
      width: 16,
      height: 16,
    },
  },
}
