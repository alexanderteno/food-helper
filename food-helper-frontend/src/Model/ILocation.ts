interface ILocation {
    id: number;
    restaurantId: number;
    streetNumber?: string;
    streetName?: string;
    city?: string;
    country?: string;
    province?: string;
    postalCode?: string;
    zipCode?: number;
}

export default ILocation;