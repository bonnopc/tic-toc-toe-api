export default async () => {
    try {
        return {}
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error')
    }
}