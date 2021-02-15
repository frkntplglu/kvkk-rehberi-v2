import React,{useState,useRef, useEffect} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const phoneRegExp = /^$|^(5(\d{9}))/
const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const schema = yup.object().shape({
  firstName: yup.string().required("Lütfen adınızı giriniz."),
  lastName: yup.string().required("Lütfen soyadınızı giriniz."),
  email: yup.string().email("Lütfen epostanızı doğru formatta giriniz.").matches(emailRegExp,"Lütfen epostanızı doğru formatta giriniz.").required("Lütfen epostanızı giriniz."),
  phone: yup.string().matches(phoneRegExp, 'Telefon numarası 5xxxxxxxxx formatında olmalıdır.').required("Lütfen telefon numaranızı giriniz."),
  title: yup.string().required("Lütfen ünvanınızı giriniz."),
  company: yup.string().required("Lütfen şirketinizi giriniz."),
  subject: yup.string().required("Lütfen konu seçiniz."),
  msg: yup.string().required("Lütfen iletmek istediğiniz mesajı giriniz."),
  check1: yup.bool().oneOf([true], "Lütfen seçiniz..")
  //age: yup.number().positive().integer().required(),
});

function Page() {
  const [visibleArrow,setVisibleArrow] = useState(true);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema)
  });
  const notify = () => toast.success("Form başarıyla gönderildi.",{
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const onSubmit = data => {
    notify();
    console.log(data);
    reset();
  };

  

  let clarificationText = useRef();

  const handleScroll = (e) => {
    if(e.target.scrollTop > 10 ){
      setVisibleArrow(false)
    } else{
      setVisibleArrow(true)
    }
  }

  const handleClick = () => {
    clarificationText.current.scrollTop = 5000;
  }
  
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - İletişim</title>
      </Head>
      <ToastContainer />
      <PageContent pageTitle="İletişim">
        <div className="contact">
          <div className="contact-info">
            <div className="contact-title">İletişim bilgileri</div>
            <h1>Rasyotek İnsan Kaynakları Bilişim A.Ş.</h1>
            <ul>
              <li>
                <span>Adres:</span>
                Yenibosna Merkez Mah. Kavak Sok. No: 11 Business Port Kat: 8
                Ofis No: 38-39 Bahçelievler / İSTANBUL
              </li>
              <li>
                <span>Telefon:</span>
                0212 803 18 74 - 75
              </li>
              <li>
                <span>Fax:</span>
                0212 803 18 76
              </li>
              <li>
                <span>E-mail:</span>info@rasyotek.com.tr
              </li>
            </ul>
            <Link href="tel://+904444908">
              <a className="call-support">444 4 908</a>
            </Link>
          </div>
          <div className="contact-form">
            <div className="contact-title">İletişim formu</div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`form-group half ${errors.firstName ? "error" : ''} `}>
                <input  name="firstName" type="text" placeholder="Ad" ref={register} />
                <p>{errors.firstName?.message}</p>
              </div>
              <div className={`form-group half ${errors.lastName ? "error" : ''}`}>
                <input name="lastName" type="text" placeholder="Soyad" ref={register} />
                <p>{errors.lastName?.message}</p>
              </div>
              <div className={`form-group ${errors.email ? "error" : ''}`}>
                <input type="text" name="email" placeholder="E-posta adresiniz" ref={register} />
                <p>{errors.email?.message}</p>
              </div>
              <div className={`form-group ${errors.phone ? "error" : ''}`}>
                <input type="text" name="phone" placeholder="Telefon" ref={register} />
                <p>{errors.phone?.message}</p>
              </div>
              <div className={`form-group ${errors.title ? "error" : ''}`}>
                <input type="text" name="title" placeholder="Ünvan" ref={register} />
                <p>{errors.title?.message}</p>
              </div>
              <div className={`form-group ${errors.company ? "error" : ''}`}>
                <input type="text" name="company" placeholder="Şirket" ref={register} />
                <p>{errors.company?.message}</p>
              </div>
              <div className={`form-group ${errors.subject ? "error" : ''}`}>
                <select name="subject"  ref={register}>
                  <option>Bilgi Talep Edilen Hizmet</option>
                  <option>KVKK Genel Danışmanlık</option>
                  <option>KVKK Denetim Hizmeti</option>
                  <option>KVKK Eğitimi Hizmeti</option>
                </select>
                <p>{errors.subject?.message}</p>
              </div>
              
              <div className={`form-group ${errors.msg ? "error" : ''}`}>
              <textarea name="msg" placeholder="Mesajınız"  ref={register}></textarea>
              <p>{errors.msg?.message}</p>
              </div>
              <h1>Aydınlatma Metni ve Gizlilik Politikası</h1>
              <div className="clarification-text" ref={clarificationText} onScroll={handleScroll}>
                <h3>1.	Gizlilik</h3>
                <p>
                RASYOTEK olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVK Kanunu) uyarınca uymakla yükümlü olduğumuz yükümlülükler kapsamında hazırlanan işbu aydınlatma metni ve gizlilik politikasının amacı RASYOTEK İnsan Kaynakları Bilişim A.Ş. (RASYOTEK) ’ ye ait olan www.kvkkrehberi.com (web sitesi) alan adına sahip web sitemizi ziyaret eden ziyaretçiler/kullanıcılar ile ilgili olarak, siteyi ziyaret ettikleri durumlarda kendi rızalarıyla paylaştıkları bilgilerin/verilerin işlenme süreçleriyle ilgili bilgilendirilmeleridir.
                </p>
                <p>
                2.	İşlenebilecek/Toplanabilecek Veriler
                RASYOTEK’ ait olan web sitesini kullanan/erişen ziyaretçiler/kullanıcıların bu kullanım/erişim sırasında paylaşacakları ve tarafımızca işlenebilecek veriler;
                </p>
                <p>
                2.1	Ziyaretçilerin web sitesini kullanırken kendi istekleri doğrultusunda, kendilerine yeni haberlerin bildiriminin yapılması ve danışmanlık hizmetinin detayı hakkında bilgilendirme yapılması amacıyla sitenin her sayfasında karşılarına çıkacak olan ‘’iletişim formu’’ başlıklı sekme üzerinden ad, soyad, e-posta adresi, telefon numarası, unvan, şirket, bilgi talep edilen hizmet ve kişisel mesaja ilişkin bilgiler,
                </p>
                <p>
                2.2	Ayrıca RASYOTEK olarak hizmet aldığımız ( Google Analytics, Google Search Console, Hotjar, Facebook Pixel ) internet sitelerinin çerez kullanımı vasıtasıyla topladığı ve bizle paylaştığı bazı verilerdir.
                </p>
                <h3>-	Çerez (Tanımlama Bilgisi) Kullanımı</h3>
                <p>
                RASYOTEK olarak doğrudan web sitemiz aracılığıyla çerez kullanarak bir veri işleme süreci gerçekleştirmemekle birlikte, hizmet aldığımız internet siteleri aracılığıyla çerez kullanımı yapılarak bir veri toplama işlemi gerçekleştirilebilmektedir.
                </p>
                <h3>2.2.1	Google Analytics </h3>
                <p>
                Kullanıcı/Ziyaretçilerin sayıları, demografik özellikleri (ülke, şehir, cinsiyet, ilgi alanları, yaş aralığı v.b.) kullandıkları cihaz, sistem bilgisi, IP adresi, Kullanıcı/Ziyaretçilerin web sitemizde hangi sayfaları kullandıkları bilgisini sağlamaktadır.
                Google Analytics Hizmet ve Koşullar sayfası : <a href="https://www.google.com/analytics/terms/tr.html" rel="nofollow"> www.google.com/analytics/terms/tr.html</a>
                </p>
                <h3>2.2.2	Google Search Console</h3>
                <p>
                Kullanıcı/Ziyaretçilerin Google arama motorundan hangi sorguları yazarak Rasyotek’ e ulaştıkları bilgisini paylaşmaktadır.
                Google Ürünleri ile ilgili olarak Google’ın RASYOTEK’ e verdiği/sağladığı hizmet için gizlilik bildirimi ile ilgili bilgilerin yer aldığı url :
                <a href="https://support.google.com/analytics/answer/7105316?hl=tr" rel="nofollow"> www.support.google.com/analytics/answer</a>
                </p>
                <h3>2.2.3	Hotjar</h3>
                <p>
                Siteye giren kullanıcıların, cihaz ve işletim sistemi bilgilerini beraberinde site içerisinde dolaştıkları sayfaları ve mouse (imleç) hareketlerini kaydederek bildirmektedir.
                Hotjar servisinin gizlilik sözleşmesi linki :
                <a href="https://www.hotjar.com/terms" rel="nofollow">www.hotjar.com/terms</a>
                </p>
                <h3>2.2.4	Facebook Pixel</h3>
                <p>
                RASYOTEK olarak web sitemize giren kullanıcıların, dolaştıkları sayfaların bilgisini Facebook ile paylaşıyoruz ve bu bilgileri Facebook ve Instagram üzerinden reklam verirken kullanıyoruz. Basit bir anlatımla web sitemize giren kişilerin Facebook ve Instagram sayfalarında bizim reklamlarımızın gösterilmesi için Facebook a giren kişilerin bilgileri gönderiliyor.
                Facebook’un bize sağladığı hizmetler ile ilgili genel bilgilerin yer aldığı sayfa :
                <a href="https://tr-tr.facebook.com/help/562973647153813?helpref=faq_content" rel="nofollow">tr-tr.facebook.com/help/562973647153813?helpref=faq_content</a>
                </p>
                <p>
                Sitemizi kullanan kişilere reklam vermemizi sağlayan Facebook kullanıcılarının reklam tercihleri hakkında bilgi sahibi olabileceği ve bu tercihleri belirleyebileceği url :
                <a href="https://tr-tr.facebook.com/help/247395082112892" rel="nofollow">tr-tr.facebook.com/help/247395082112892</a>
                </p>
                <h3>Kullanıcı/Ziyaretçi olarak eğer çerez kullanımını önlemek istiyorsanız;</h3>
                <p>
                Chrome tarayıcılarda Ayarlar &gt; Gelişmiş ayarları göster... &gt; Gizlilik &gt; İçerik Ayarları &gt; Çerezler &gt; İstisnaları Yönet yolundan veya chrome://settings/cookies adresinden (yardım),
                Internet Explorer' da Araçlar düğmesini ve ardından İnternet seçenekleri' ni seçin &gt; Gizlilik sekmesine tıklayın &gt; Ayarlar bölümünden tüm tanımlama bilgilerini engellemek için kaydırıcıyı yukarı hareket ettirin ya da hepsine izin vermek için aşağı hareket ettirerek Tamam'ı seçin.
                </p>
                <p>
                Firefox tarayıcılarda Seçenekler &gt; Gizlilik &gt; Geçmiş &gt; Geçmiş için özel ayarları kullansın &gt; Sitelerden çerezleri kabul et &gt; Ayrıcalıklar yolundan veya about: preferences - privacy adresinden (yardım) çerezleri sitem için devre dışı bırakabilirsiniz.
                </p>
                <p>
                iOS Safari &gt; Telefonunuzda Ayarlar simgesine dokunun &gt; Safari Çerezleri Engelle Her Zaman Engelle' ye dokunun. &gt; 5 dakika bekleyin ve uygulamayı açın.
                </p>
                <p>
                Diğer tarayıcılar için, tarayıcınızın ayarlar bölümünden veya yardım bölümünden ulaşabilirsiniz.
                Çerez kullanımının önlenmesi internet sitelerinin kullanımı noktasında ilgili internet sitesinin tüm özelliklerinden yararlanamamayı veya eksik yararlanma sonucunu doğurabilir.
                Web sitesini kullanan kullanıcılarımıza siteye girişlerinde kullanım kalitesini arttırmak, site kullanımını kolaylaştırarak kullanımdan alınan faydayı arttırmak ve web sitemizi geliştirip güvenlik açıkları ihtimalini önlemek gibi amaçlarla kullanıcı/ziyaretçilerin web sitesine girdiklerinde ziyaret ettikleri/ulaştıkları bölümlere ilişkin verileri işliyoruz.
                RASYOTEK, Kullanıcı/Ziyaretçilerin, siteye giriş yaptıkları andan başlayarak, iletişim formunu kullanmaları ve web sitesini kullanıcı/ziyaretçiler açısından daha fazla geliştirmek, sunduğu hizmetler hakkında kullanıcı/ziyaretçileri bilgilendirmek, hizmetlere ilişkin memnuniyetlerini / şikayetlerini öğrenmek, web sitesini daha güvenli hale getirmek ve web sitesi üzerindeki hata/eksiklerin giderilmesi, yeni hizmetlerin tanıtımını yapmak gibi gerekçelerle yukarıda belirtilen nedenlerle topladığı veriler kapsamında sınırlı olmak üzere bir veri işleme süreci gerçekleştirmektedir. Bu kapsamda veri sahibi kullanıcı/ziyaretçilerden, web sitesini ziyaret ettiklerinde/kullandıklarında işleyeceği verilere ilişkin açık rıza alacaktır.
                </p>
                <p>
                Bunun dışında gerçekleşecek herhangi bir veri işleme süreci için ise RASYOTEK, KVK Kanunu uyarınca ilgili kişinin rızası hilafına hareket etmeyeceğini ve rızasını aldıktan sonra bir veri işleme sürecine gireceğini taahhüt eder.
                </p>
                <h3>3.	Veri İşleme Sebepleri ve Verilere Erişebilecek Kişiler</h3>
                <p>
                KVK Kanunu uyarınca verilerin işlenebilmesi için ilgili kişinin rızasının alınması gerekli olmakla birlikte bazı istisnai hallerde ilgili kişinin rızası olmasa dahi bu veriler işlenebilecektir. Bu haller;
                </p>
                <p>a)	Kanunlarda açıkça öngörülmesi. </p>
                <p>b)	Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması. </p>
                <p>c)	Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması. </p>
                <p>d)	Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması.</p>
                <p>e)	İlgili kişinin kendisi tarafından alenileştirilmiş olması. </p>
                <p>f)	Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması. </p>
                <p>g)	İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</p>
                RASYOTEK yukarıda bahsedilen amaçların gerçekleştirilmesi kapsamında verileri aşağıdaki kişilerle paylaşabilir. Web sitesi ziyaretçi/kullanıcıları bu hususta açıkça bilgilendirildiklerini kabul ederler. <p></p>
                <h3>Paylaşım yapılabilecek kişiler;</h3>
                <p>•	Şirket iştirakleri, çalışanları, ortakları/hissedarları, yetkilileri, iş ortakları</p>
                <h3>4.	Kullanıcı’ nın Verilere Erişim Hakkı Ve Talepler</h3>
                <p>Kullanıcı/ Ziyaretçiler, KVK Kanunu tarafından kendilerine tanına hak/yetkiler çerçevesinde, RASYOTEK’ e başvurarak kendileriyle ilgili:</p>
                <p>•	Kişisel veri işlenip işlenmediğini öğrenme,</p>
                <p>•	Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</p>
                <p>•	Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</p>
                <p>•	Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</p><p></p>
                <p>•	Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,
                </p><p>•	İlgili mevzuatta öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</p>
                <p>•	İlgili mevzuat uyarınca yapılan düzeltme, silme ve yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</p>
                <p>•	İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</p>
                <p>•	Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme haklarına sahiptirler.</p>
                <p>Kişisel veri sahibi kullanıcı / ziyaretçiler KVK Kanunu uyarınca RASYOTEK’ e yukarıdaki taleplerine ilişkin olarak Başvuru Formu vasıtasıyla başvurabilir. Başvurular, KVK Kanunu’nun 13’ üncü maddesinin 2’ inci fıkrası gereğince, talebin niteliğine göre talebinizin bizlere ulaştığı tarihten itibaren otuz gün içinde cevaplandırılır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, Kurulca belirlenen tarifedeki ücret RASYOTEK tarafından veri sahibinden alınabilir. </p>
                <p>
                KVK Kanunu uyarınca RASYOTEK talebi kabul edebilir veya gerekçesini açıklayarak reddedebilir ve cevabını ilgili kişiye yazılı olarak veya elektronik ortamda bildirir. Başvuruda yer alan talebin kabul edilmesi hâlinde RASYOTEK tarafından gereği yerine getirilecektir. KVK Kanunu uyarınca başvurunun veri sorumlusunun hatasından kaynaklanması hâlinde alınan ücret ilgiliye iade edilir.
                Ziyaretçi/Kullanıcı KVK Kanunu uyarınca RASYOTEK’ e sağlamış olduğu bilginin tam, doğru ve güncel olduğu taahhüt eder ve bu taahhüde aykırılık oluşturacak bir durumun varlığı halinde tüm sorumluluk kullanıcı/ziyaretçilere ait olacak olup, RASYOTEK’ in herhangi bir sorumluluğu bulunmayacaktır.
                </p>
                <h3>5.	Kişisel Verilerin Saklanma Süresi ile Kişisel Verilere İlişkin Alınacak Önlemler</h3>
                <p>KVK Kanunu uyarınca, KVK Kanun’ u ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel veriler resen veya ilgili kişinin talebi üzerine veri sorumlusu tarafından silinir, yok edilir veya anonim hâle getirilir. Bu hüküm kapsamında;</p>
                <p>Rasyotek olarak işlediğimiz verileri 1 (Bir) yıl süre ile sistemimizde tutmaktayız ve akabinde iletişim formu ile tarafımıza ulaşan bilgilerin tamamı ve web sitesinin kullanımı ile toplanan veriler için, kanuni yükümlülükler saklı kalmak kaydıyla ilgili kişiden yeniden rıza alınmadıkça veya ilgili kişi gelişen bir danışmanlık süreci kapsamında veri işlenmesini gerektirmeyen bir hal olmadıkça, veriler silme yöntemi ile sistemden kaldırılacaktır.</p>
                <h3>KVK Kanunu uyarınca Veri sorumlusu; </h3>
                <p>a) Kişisel verilerin hukuka aykırı olarak işlenmesini önlemek, </p>
                <p>b) Kişisel verilere hukuka aykırı olarak erişilmesini önlemek,</p>
                <p>c) Kişisel verilerin muhafazasını sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari tedbirleri almak zorundadır.</p>
                <p>Veri sorumlusu, kişisel verilerin kendi adına başka bir gerçek veya tüzel kişi tarafından işlenmesi hâlinde, birinci fıkrada belirtilen tedbirlerin alınması hususunda bu kişilerle birlikte müştereken sorumludur. </p>
                <p>
                Veri sorumlusu, kendi kurum veya kuruluşunda, bu Kanun hükümlerinin uygulanmasını sağlamak amacıyla gerekli denetimleri yapmak veya yaptırmak zorundadır.
                Veri sorumluları ile veri işleyen kişiler, öğrendikleri kişisel verileri bu Kanun hükümlerine aykırı olarak başkasına açıklayamaz ve işleme amacı dışında kullanamazlar. Bu yükümlülük görevden ayrılmalarından sonra da devam eder.
                </p>
                <p>RASYOTEK bu kapsamda sayılan yükümlülüklerin tamamına uyduğunu taahhüt eder.</p>
                <p>RASYOTEK, işbu aydınlatma metni ve gizlilik politikasında güncel değişimlere göre değişiklik yapma hakkını saklı tutar ve bir değişiklik yaptığında bu değişiklikler web sitesinde ilan edildiği tarihte yürürlük kazanır.</p>

              </div>
              
              <div className="ct-arrow-wrapper">{visibleArrow ? <div className="ct-arrow" onClick={handleClick}>down</div> : null}</div>
              <div className="checkbox">
                <input type="checkbox" name="check1" id="Check1" ref={register} />
                <label htmlFor="Check1">
                  İşbu Aydınlatma Metni’ ni okuduğumu, bu kapsamda RASYOTEK’ in
                  bir veri işleme süreci gerçekleştirdiği hususu hakkında tam ve
                  eksiksiz olarak bilgi sahibi olduğumu ve verilerin silinmesi
                  ile ilgili olarak bilgilendirildiğimi kabul, beyan ve taahhüt
                  ederim.
                </label>
                {errors.check1?.message}
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="check2"
                  id="Check2"
                  value="false"
                  required=""
                />
                <label htmlFor="Check2">
                  Web sitesine giriş yaptığım andan başlayarak, iletişim formunu
                  kullanmam da dahil ayrılmamla son bulan süreçte, Aydınlatma
                  Metninde ayrıntılı olarak bahsedilen verilerin işlendiği
                  konusunda bilgilendirildiğimi ve bu kapsamda RASYOTEK
                  tarafından gerçekleştirilecek veri işleme sürecine açık
                  rızamın olduğunu kabul, beyan ve taahhüt ederim.
                </label>
              </div>
              <div className="captcha"></div>
              <button>Gönder</button>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96337.51784924384!2d28.74547473041088!3d41.0132778020364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cabbacffffffe9%3A0xf70378dd120b6a9a!2sRasyotek+%C4%B0nsan+Kaynaklar%C4%B1+Bili%C5%9Fim+A.%C5%9E.%2C+Yenibosna+Merkez+Mahallesi+Kavak+Sokak%2C+No%3A11+Kat%3A8+Business+Port+Ofis+No%3A38-39%2C+34197+Bah%C3%A7elievler%2F%C4%B0stanbul!3m2!1d41.013298999999996!2d28.815514999999998!4m5!1s0x14cabbacffffffe9%3A0xf70378dd120b6a9a!2sRasyotek+%C4%B0nsan+Kaynaklar%C4%B1+Bili%C5%9Fim+A.%C5%9E.%2C+Yenibosna+Merkez+Mahallesi+Kavak+Sokak%2C+No%3A11+Kat%3A8+Business+Port+Ofis+No%3A38-39%2C+34197+Bah%C3%A7elievler%2F%C4%B0stanbul!3m2!1d41.013298999999996!2d28.815514999999998!5e0!3m2!1str!2str!4v1483893313215"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </PageContent>
    </Layout>
  );
}

export default Page;
