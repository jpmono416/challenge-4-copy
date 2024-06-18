import axios from 'axios';

export const getCitiesData = async (input) => {
    try {
        const response = await axios.get(
            `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${input}&limit=5`
        );
        return response.data.data.map((city) => city.city);
    } catch (error) {
        console.error("Failed to fetch cities", error);
        return [];
    }
};