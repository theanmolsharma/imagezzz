import {createRouter, createWebHistory} from "vue-router";
import AuthHandler from "@/components/AuthHandler";
import ImageList from "@/components/ImageList";
import UploadForm from "@/components/UploadForm";

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: "/", component: ImageList},
        { path: "/upload", component: UploadForm},
        { path: '/oauth2/callback', component: AuthHandler}
    ]
})