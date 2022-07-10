export const fetcher = async(url) => {
   const res = await fetch(url)

   // もしステータスコードが 200-299 の範囲内では無い場合、
   // レスポンスをパースして投げようとします。
   if (!res.ok) {
     const error = new Error('データが取得できませんでした。')
     // エラーオブジェクトに追加情報を付与します。
     error.status = res.status
     throw error
   }
 
   return res.json()
}