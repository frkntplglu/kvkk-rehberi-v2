import React,{useState} from 'react'
import VideoPost from './VideoPost'


function VideoList() {


    return (
        <div className="video-list">

            <VideoPost videoImage="/images/hqdefault.jpg" videoID="7brR_VRhGZE" videoTitle="Açık Rıza Her Durumda Alınması Zorunlu Mudur?" />
            <VideoPost videoImage="/images/hqdefault1.jpg" videoID="Ec_ASrFcqOo" videoTitle="KVKK Açık Rıza Nedir? Kişisel Veriler Açık Rıza Olmadan İşlenemezler" />
            <VideoPost videoImage="/images/hqdefault2.jpg" videoID="RWljX7d5uhs" videoTitle="Kişisel Verileri Koruma Kanunu Nedir? Gündelik Hayatımızı Nasıl Etkiliyor?" />
            <VideoPost videoImage="/images/hqdefault3.jpg" videoID="BmOzOd2t2NM" videoTitle="Veri Sorumlusu Nedir?" />
            <VideoPost videoImage="/images/hqdefault4.jpg" videoID="6DycbjICxiA" videoTitle="VERBİS Nedir?" />
            <VideoPost videoImage="/images/hqdefault5.jpg" videoID="pfJVqBzr4hk" videoTitle="VERBİS'e Ne Zaman Kayıt Olmalısınız?" />
            <VideoPost isFull={true} videoImage="/images/hqdefault6.jpg" videoID="QjyFJgvYr3g" videoTitle="Veri Sorumlusunun Tüzel Kişi Olduğu Durumlar ve İrtibat Kişisi Kavramları" />
        </div>
    )
}

export default VideoList
