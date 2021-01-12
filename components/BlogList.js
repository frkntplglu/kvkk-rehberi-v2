import React,{useState} from 'react'
import VideoPost from './VideoPost'


function VideoList() {


    return (
        <div className="video-list">

            <VideoPost videoImage="/images/hqdefault.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="Açık Rıza Her Durumda Alınması Zorunlu Mudur?" />
            <VideoPost videoImage="/images/hqdefault1.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="KVKK Açık Rıza Nedir? Kişisel Veriler Açık Rıza Olmadan İşlenemezler" />
            <VideoPost videoImage="/images/hqdefault2.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="Kişisel Verileri Koruma Kanunu Nedir? Gündelik Hayatımızı Nasıl Etkiliyor?" />
            <VideoPost videoImage="/images/hqdefault3.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="Veri Sorumlusu Nedir?" />
            <VideoPost videoImage="/images/hqdefault4.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="VERBİS Nedir?" />
            <VideoPost videoImage="/images/hqdefault5.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="VERBİS'e Ne Zaman Kayıt Olmalısınız?" />
            <VideoPost isFull={true} videoImage="/images/hqdefault6.jpg" videoURL="https://www.youtube.com/watch?v=_sI_Ps7JSEk" videoTitle="Veri Sorumlusunun Tüzel Kişi Olduğu Durumlar ve İrtibat Kişisi Kavramları" />
        </div>
    )
}

export default VideoList
