import conf from '../conf.js'
import { Client,Databases,Storage,ID,Query } from 'appwrite'

export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
       this.client
              .setEndpoint(conf.appwriteUrl)
              .setProject(conf.appwriteProjectId)
              this.databases = new Databases(this.client)
              this.storage = new Storage(this.client)
    }

    async createPost({title,slug,content, featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service error :: createPost :: error ",error)
        }
    }

    async updatePost(slug,{title,content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service error :: updatePost :: error ",error)
        }
    }

    async deletePost(slug){
        try {
            return await thid.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service error :: deletePost :: error ",error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,)
        } catch (error) {
            console.log("Appwrite service error :: getPost :: error ",error)
            return false
        }
    }

    async getPosts(quries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                quries,
            )
        } catch (error) {
            console.log("Appwrite service error :: getPosts :: error ",error)

        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service error :: getPosts :: error ",error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
              fileId  
            )
            return true
        } catch (error) {
            console.log("Appwrite service error :: deleteFile :: error ",error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service