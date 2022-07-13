import { usePostRepository } from "@/api/repositories/usePostRepository.js"
import { useUserRepository } from "@/api/repositories/useUserRepository.js"


const repository = {
    posts: usePostRepository,
    users: useUserRepository,
}

export default repository