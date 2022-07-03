export const fetcher = async(url) => {
   const res =  await fetch(url)

   if(!res.ok) {
    throw new Error('データ取得に失敗しました。')
   }
   
   return res.json()
}