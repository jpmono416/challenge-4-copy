export default class Config {
    static backendUrl = () => import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
}
