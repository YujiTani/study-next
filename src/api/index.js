import { usePostRepository } from "@/api/repositories/usePostRepository.js"


const repository = {
    posts: usePostRepository,
}

export default repository