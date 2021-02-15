import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import Accordion from "../components/Accordion";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Aydınlatma Metni</title>
      </Head>
      <PageContent pageTitle="Aydınlatma Metni">
        <h1 className="text-center">KVKKREHBERİ <br/>(GENEL) KİŞİSEL VERİLERİNİN KORUNMASI VE <br/>İŞLENMESİ AYDINLATMA METNİ <br/>(“Aydınlatma Metni”)</h1>
        
        <Accordion title="1.	Amaç ve Veri Sorumlusunun Kimliği" open={true}>
          <p>İşbu “Kişisel Verilerinin İşlenmesi ve Korunması Aydınlatma Metni” 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”)’nun 10. maddesi ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca, aşağıda kimliğine yer verilen veri sorumlusu Rasyotek İnsan Kaynakları Bilişim A.Ş. (“Şirket”) tarafından kişisel verilerinizin işlenmesine ilişkin olarak aydınlatma yükümlülüğünün yerine getirilmesi amacıyla hazırlanmıştır.</p>
          <p>Kişisel verileriniz, Merkez Mh.Kavak Sk.N.11 K.8 Ofis N.38-39 Business Port Yenibosna Bahçelievler İstanbul adresinde mukim, Merter Vergi Dairesi, 7340811721 nolu vergi mükellefi Rasyotek İnsan Kaynakları Bilişim A.Ş. olarak; veri sorumlusu sıfatıyla Kanun uyarınca, aşağıda sıralanan amaçlar çerçevesinde ve bu amaçlarla bağlantılı, sınırlı ve ölçülü şekilde, tarafımıza ulaştığı şekliyle kişisel verilerin doğruluğunu ve güncelliğini koruyarak aşağıda açıklanan kapsamda işlenebilecektir.</p>
        </Accordion>
        <Accordion title="2.	Kişisel Verilerin Toplanması ve İşlenme Amaçları" open={true}>
          <p>Şirket; kişisel verileri, doğrudan veri sahiplerinin kendisinden temin edebildiği gibi dolaylı olarak 3.kişilerden ve veri sahibinin kendisinin alenileştirmiş olduğu veriler içerisinden de temin edebilmektedir. Toplanan kişisel verileriniz, Kanun’da öngörülen temel ilkelere uygun olarak ve Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde; RASYOTEK tarafından veri sahiplerinin kişisel verilerinin yönetim süreçlerinde Şirket'in ve Şirketle iş ilişkisi içerisinde olan ilgili kişilerin hukuki, teknik, ticari ve iş güvenliğinin temini ve faaliyetlerin ifası amacıyla işlenebilecektir. Bu kapsamda sözlü, fiziksel veya elektronik ortamdan veri toplanmaktadır ve bu kişisel veriler işlenmektedir. Kişisel verilerinizin neler olduğunu, nasıl toplandıklarını ve tarafımızca işlemeye konu olan kişisel verilerin neler olduğunu ve bu verilerin işlenme amaçlarının detaylarını aşağıdaki tablolardan inceleyebilirsiniz.</p>
          <Accordion title="Müşterilerin">
            <div className="table-responsive">
              <table className="page-table">
              <thead>
                  <tr>
                    <th colSpan="3">
                        <h3>KİMLİK VERİSİ</h3>
                    </th>
                  </tr>
                  <tr>
                    <th>Kimlik Verisine Ait Veriler</th>
                    <th>Verinin Elde Edilme Yöntemi</th>
                    <th>Kişisel Verinin İşlenme Amacı</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                        <ul>
                          <li>Ad Soyad</li>
                          <li>Cinsiyet</li>
                          <li>Doğduğu Ülke</li>
                          <li>Doğum tarihi</li>
                          <li>Doğum yeri</li>
                          <li>İmza</li>
                          <li>TC kimlik No</li>
                          <li>Yaş</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>Kişilerin Kendisinden</li>
                          <li>Açık İnternet Kaynakları</li>
                          <li>E-Posta</li>
                          <li>İnternet Sitesinden</li>
                          <li>Kartvizit</li>
                          <li>Kişinin Kendisinden Şirket İçi Bir Departmandan</li>
                          <li>Şirket İçi Sistemlerden</li>
                          <li>Şirket İnternet Sitesi</li>
                          <li>Tedarikçilerden</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>Çalışan Adayı / Stajyer / Öğrenci Seçme ve Yerleştirme Süreçlerinin Yürütülmesi</li>
                          <li>Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi</li>
                          <li>Erişim Yetkilerinin Yürütülmesi</li>
                          <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                          <li>Hukuk İşlerinin Takibi ve Yürütülmesi</li>
                          <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                          <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                          <li>İş Süreçlerinin İyileştirilmesine Yönelik Önerilerin Alınması ve Değerlendirilmesi</li>
                          <li>İş Sürekliliğinin Sağlanması Faaliyetlerinin Yürütülmesi</li>
                          <li>Lojistik Faaliyetlerinin Yürütülmesi</li>
                          <li>Mal / Hizmet Satış Süreçlerinin Yürütülmesi</li>
                          <li>Mal / Hizmet Üretim ve Operasyon Süreçlerinin Yürütülmesi</li>
                          <li>Sözleşme Süreçlerinin Yürütülmesi</li>
                          <li>Talep / Şikayetlerin Takibi</li>
                          <li>Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi</li>
                          <li>Finans ve Muhasebe İşlerinin Yürütülmesi</li>
                          <li>Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
              <thead>
                  <tr>
                    <th colSpan="3">Hukuki Sebepler</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td colSpan="3" className="text-center">
                        6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                        6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br/>
                        6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                        6698 sk. madde 5/2 (e): Bir hakkın tesisi kullanılması veya korunması <br/>
                        6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                    </td>
                  </tr>
              </tbody>
            </table>
            </div>
            <div className="table-responsive">
              <table className="page-table">
              <thead>
                  <tr>
                    <th colSpan="3">
                        <h3>İLETİŞİM VERİSİ</h3>
                    </th>
                  </tr>
                  <tr>
                    <th>İletişim Verisine Ait Veriler</th>
                    <th>Verinin Elde Edilme Yöntemi</th>
                    <th>Kişisel Verinin İşlenme Amacı</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                        <ul>
                          <li>Adres</li>
                          <li>E-posta adresi</li>
                          <li>İkametgah</li>
                          <li>İletişim Adresi</li>
                          <li>Telefon No</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>Kişinin Kendisinden</li>
                          <li>Açık İnternet Kaynakları</li>
                          <li>E-Posta</li>
                          <li>İnternet Sitesinden</li>
                          <li>Kartvizit</li>
                          <li>Kişinin Kendisinden Şirket İçi Bir Departmandan</li>
                          <li>Şirket İçi Sistemlerden</li>
                          <li>Şirket İnternet Sitesi</li>
                          <li>Tedarikçilerden</li>
                          <li>Telefon / Çağrı Merkezi</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>Çalışan Adayı / Stajyer / Öğrenci Seçme ve Yerleştirme Süreçlerinin Yürütülmesi</li>
                          <li>Çalışan Adaylarının Başvuru Süreçlerinin Yürütülmesi</li>
                          <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                          <li>Hukuk İşlerinin Takibi ve Yürütülmesi</li>
                          <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                          <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                          <li>İş Süreçlerinin İyileştirilmesine Yönelik Önerilerin Alınması ve Değerlendirilmesi</li>
                          <li>İş Sürekliliğinin Sağlanması Faaliyetlerinin Yürütülmesi</li>
                          <li>Lojistik Faaliyetlerinin Yürütülmesi</li>
                          <li>Mal / Hizmet Satış Süreçlerinin Yürütülmesi</li>
                          <li>Sözleşme Süreçlerinin Yürütülmesi</li>
                          <li>Talep / Şikayetlerin Takibi</li>
                          <li>Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi</li>
                          <li>Finans ve Muhasebe İşlerinin Yürütülmesi</li>
                          <li>İnsan Kaynakları Süreçlerinin Planlanması</li>
                          <li>Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
              <thead>
                  <tr>
                    <th colSpan="3">Hukuki Sebepler</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td colSpan="3" className="text-center">
                        6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                        6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br/>
                        6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                        6698 sk. madde 5/2 (e): Bir hakkın tesisi kullanılması veya korunması <br/>
                        6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                    </td>
                  </tr>
              </tbody>
            </table>
            </div> 
            <div className="table-responsive">
              <table className="page-table">
              <thead>
                  <tr>
                    <th colSpan="3">
                        <h3>İŞLEM GÜVENLİĞİ VERİSİ</h3>
                    </th>
                  </tr>
                  <tr>
                    <th>İşlem Güvenliği Verisine Ait Veriler</th>
                    <th>Verinin Elde Edilme Yöntemi</th>
                    <th>Kişisel Verinin İşlenme Amacı</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                        <ul>
                          <li>Call Center Kayıtları</li>
                          <li>Cookie Kayıtları</li>
                          <li>İnternet Erişim Kayıt Log'ları (Şirket ağı üzerinden internete erişen herkes için)</li>
                          <li>IP adresi bilgileri</li>
                          <li>IP Adresi İzleme</li>
                          <li>İnternet sitesi giriş çıkış bilgileri </li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>İnternet Sitesinden</li>
                          <li>Şirket İnternet Sitesi</li>
                          <li>Telefon / Çağrı Merkezi</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>Bilgi Güvenliği Süreçlerinin Yürütülmesi, </li>
                          <li>Eğitim Faaliyetlerinin Yürütülmesi, </li>
                          <li>Erişim Yetkilerinin Yürütülmesi, </li>
                          <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi,  </li>
                          <li>Hukuk İşlerinin Takibi ve Yürütülmesi, </li>
                          <li>İç Denetim/ Soruşturma / İstihbarat Faaliyetlerinin Yürütülmesi, </li>
                          <li>İletişim Faaliyetlerinin Yürütülmesi, </li>
                          <li>İnsan Kaynakları Süreçlerinin Planlanması, </li>
                          <li>İş Faaliyetlerinin Yürütülmesi / Denetimi, </li>
                          <li>İş Sürekliliğinin Sağlanması Faaliyetlerinin Yürütülmesi, </li>
                          <li>Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi, </li>
                          <li>Mal / Hizmet Satış Sonrası Destek Hizmetlerinin Yürütülmesi, </li>
                          <li>Mal / Hizmet Satış Süreçlerinin Yürütülmesi, </li>
                          <li>Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi, </li>
                          <li>Müşteri Memnuniyetine Yönelik Aktivitelerin Yürütülmesi, </li>
                          <li>Performans Değerlendirme Süreçlerinin Yürütülmesi, </li>
                          <li>Saklama ve Arşiv Faaliyetlerinin Yürütülmesi, </li>
                          <li>Sözleşme Süreçlerinin Yürütülmesi, </li>
                          <li>Talep / Şikayetlerin Takibi, </li>
                          <li>Veri Sorumlusu Operasyonlarının Güvenliğinin Temini, </li>
                          <li>Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi, </li>
                          <li>Yetenek / Kariyer Gelişimi Faaliyetlerinin Yürütülmesi</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
              <thead>
                  <tr>
                    <th colSpan="3">Hukuki Sebepler</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td colSpan="3" className="text-center">
                        6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                        6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br/>
                        6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                        6698 sk. madde 5/2 (e): Bir hakkın tesisi kullanılması veya korunması <br/>
                        6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                    </td>
                  </tr>
              </tbody>
            </table>
            </div>  
            <div className="table-responsive">
              <table className="page-table">
              <thead>
                  <tr>
                    <th colSpan="3">
                        <h3>TALEP ŞİKAYET YÖNETİMİ BİLGİSİ VERİSİ</h3>
                    </th>
                  </tr>
                  <tr>
                    <th>Talep ve Şikayet Yönetimi Bilgisi Verisine Ait Veriler</th>
                    <th>Verinin Elde Edilme Yöntemi</th>
                    <th>Kişisel Verinin İşlenme Amacı</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>
                        <ul>
                          <li>Kişinin Ürün ve Hizmetler Hakkında Yaptığı Taleplerle İlgili Toplanan Bilgiler ve Kayıtlar</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li>Kişinin Kendisi</li>
                          <li>Matbu Evrak</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                          <li> Eğitim Faaliyetlerinin Yürütülmesi</li>
                          <li>
                              Faaliyetlerin Mevzuata Uygun Yürütülmesi
                          </li>
                          <li>
                              Hukuk İşlerinin Takibi ve Yürütülmesi
                          </li>
                          <li>
                              İş Faaliyetlerinin Yürütülmesi / Denetimi
                          </li>
                          <li>
                              Mal / Hizmet Satış Sonrası Destek Hizmetlerinin Yürütülmesi
                          </li>
                          <li>
                              Müşteri Memnuniyetine Yönelik Aktivitelerin Yürütülmesi
                          </li>
                          <li>Talep / Şikayetlerin Takibi</li>
                        </ul>
                    </td>
                  </tr>
              </tbody>
              <thead>
                  <tr>
                    <th colSpan="3">Hukuki Sebepler</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td colSpan="3" className="text-center">
                        6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                        6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br/>
                        6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                        6698 sk. madde 5/2 (e): Bir hakkın tesisi kullanılması veya korunması <br/>
                        6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                    </td>
                  </tr>
              </tbody>
            </table>
            </div>
          </Accordion>
          <Accordion title="Potansiyel Müşterilerin/ Potansiyel Ürün veya Hizmet Alan Kişilerin">
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>KİMLİK VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Kimlik Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Ad Soyad</li>
                            <li>Cinsiyet</li>
                            <li>Doğum tarihi</li>
                            <li>Doğum yeri</li>
                            <li>Medeni Hali</li>
                            <li>TC kimlik No</li>
                            <li>Uyruk</li>
                            <li>Yaş</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Açık İnternet Kaynakları</li>
                            <li>E-Posta</li>
                            <li>İnternet Sitesinden</li>
                            <li>Kartvizit</li>
                            <li>Kişinin Kendisinden</li>
                            <li>Müşteri Referansı</li>
                            <li>SGK</li>
                            <li>Telefon / Çağrı Merkezi</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>İş Faaliyetlerinin Yürütülmesi / Teşviklerin Hesaplanması</li>
                            <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                            <li>Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi</li>
                            <li>Toplantı Faaliyetlerinin Yürütülmesi</li>
                            <li>Ürün / Hizmetlerin Pazarlama Süreçlerinin Yürütülmesi</li>
                            <li>Finans ve Muhasebe İşlerinin Yürütülmesi</li>
                            <li>Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (f): Meşru menfaat
                      </td>
                    </tr>
                </tbody>
              </table>

            </div>
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>İLETİŞİM VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>İletişim Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Adres</li>
                            <li>E-posta adresi</li>
                            <li>İletişim adresi</li>
                            <li>Telefon No</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Açık İnternet Kaynakları</li>
                            <li>E-Posta</li>
                            <li>İnternet Sitesi</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>İş Faaliyetlerinin Yürütülmesi / Teşviklerin Hesaplanması</li>
                            <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                            <li>Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi</li>
                            <li>Toplantı Faaliyetlerinin Yürütülmesi</li>
                            <li>Ürün / Hizmetlerin Pazarlama Süreçlerinin Yürütülmesi</li>
                            <li>Finans ve Muhasebe İşlerinin Yürütülmesi</li>
                            <li>Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (f): Meşru menfaat
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
          <Accordion title="Diğer 3. Kişilerin">
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>KİMLİK VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Kimlik Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Ad Soyad</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>E-Posta</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                            <li>Eğitim Faaliyetlerinin Yürütülmesi</li>
                            <li>Hukuk İşlerinin Takibi ve Yürütülmesi</li>
                            <li>İnsan Kaynakları Süreçlerinin Planlanması</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br/>
                          6698 sk. madde 5/2 (e): Bir hakkın tesisi kullanılması veya korunması <br/>
                          6698 sk. madde 5/2 (f): Meşru menfaat
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>İLETİŞİM VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>İletişim Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Adres</li>
                            <li>E-posta adresi</li>
                            <li>İletişim adresi</li>
                            <li>Telefon No</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>E-Posta</li>
                            <li>Telefon</li>
                            <li>Çağrı Merkezi</li>
                            <li>Kartvizit</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                            <li>Eğitim Faaliyetlerinin Yürütülmesi</li>
                            <li>Hukuk İşlerinin Takibi ve Yürütülmesi</li>
                            <li>İnsan Kaynakları Süreçlerinin Planlanması</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br/>
                          6698 sk. madde 5/2 (e): Bir hakkın tesisi kullanılması veya korunması <br/>
                          6698 sk. madde 5/2 (f): Meşru menfaat
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
          <Accordion title="Ziyaretçilerin">
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>KİMLİK VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Kimlik Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Ad Soyad</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Genel Müdürlük Girişi</li>
                            <li>Şirket İçi Bir Departmandan</li>
                            <li>Şirket İçi Sistemlerden</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Bilgi Güvenliği Süreçlerinin Yürütülmesi</li>
                            <li>Erişim Yetkilerinin Yürütülmesi</li>
                            <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                            <li>Fiziksel Mekan Güvenliğinin Temini</li>
                            <li>İç Denetim/ Soruşturma / İstihbarat Faaliyetlerinin Yürütülmesi</li>
                            <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                            <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                            <li>Ziyaretçi Kayıtlarının Oluşturulması ve Takibi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                          6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                          6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>İLETİŞİM VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>İletişim Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Telefon No</li>
                            <li>E-posta</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Genel Müdürlük Girişi</li>
                            <li>Şirket İçi Bir Departmandan</li>
                            <li>Şirket İçi Sistemlerden</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Bilgi Güvenliği Süreçlerinin Yürütülmesi</li>
                            <li>Erişim Yetkilerinin Yürütülmesi</li>
                            <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                            <li>Fiziksel Mekan Güvenliğinin Temini</li>
                            <li>İç Denetim/ Soruşturma / İstihbarat Faaliyetlerinin Yürütülmesi</li>
                            <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                            <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                            <li>Ziyaretçi Kayıtlarının Oluşturulması ve Takibi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                          6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                          6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr >
                      <th colSpan="3">
                          <h3>İŞLEM GÜVENLİĞİ VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>İşlem Güvenliği Verisine Ait Veriler</th>
                      <th>Verinin Elde Edilme Yöntemi</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Call Center Kayıtları</li>
                            <li>Cookie Kayıtları</li>
                            <li>Internet Erişim Kayıt Log'ları (Şirket ağı üzerinden internete erişen herkes için)</li>
                            <li>IP adresi bilgileri</li>
                            <li>IP Adresi İzleme</li>
                            <li>İnternet sitesi giriş çıkış bilgileri</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>İnternet Sitesinden</li>
                            <li>Şirket İnternet Sitesi</li>
                            <li>Telefon / Çağrı Merkezi</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Bilgi Güvenliği Süreçlerinin Yürütülmesi</li>
                            <li>Erişim Yetkilerinin Yürütülmesi</li>
                            <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                            <li>Fiziksel Mekan Güvenliğinin Temini</li>
                            <li>İç Denetim/ Soruşturma / İstihbarat Faaliyetlerinin Yürütülmesi</li>
                            <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                            <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                            <li>İş Sürekliliğinin Sağlanması Faaliyetlerinin Yürütülmesi</li>
                            <li>Saklama ve Arşiv Faaliyetlerinin Yürütülmesi</li>
                            <li>Talep / Şikayetlerin Takibi</li>
                            <li>Veri Sorumlusu Operasyonlarının Güvenliğinin Temini</li>
                            <li>Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi</li>
                            <li>Ziyaretçi Kayıtlarının Oluşturulması ve Takibi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br/>
                          6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br/>
                          6698 sk. madde 5/2 (f): Meşru menfaat <br/>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
        </Accordion>
        <Accordion title="3.	Kişisel Verilerinizin Aktarıldığı Taraflar ve Aktarım Amaçları">
          <p>Toplanan kişisel verileriniz, Kanun’da öngörülen temel ilkelere uygun olarak ve Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları dahilinde, Şirketimiz tarafından yukarıda sayılan Amaçlar kapsamında gerçek veya özel hukuk tüzel kişilerine ve kanunen yetkili kamu ve özel kurum ve kuruluşlarına aktarılabilecektir. Aktarıma konu kişisel verilerinizin detaylarını aşağıdaki tablolardan inceleyebilirsiniz.</p>
          <Accordion title="Müşterilerin">
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr>
                      <th colSpan="3">
                          <h3>KİMLİK VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Kimlik Verisine Ait Veriler</th>
                      <th>Aktarım Yapılan Taraflar</th>
                      <th>Kişisel Verinin Aktarım Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Ad Soyad</li>
                            <li>Anne - baba adı</li>
                            <li>Cinsiyet</li>
                            <li>Doğduğu Ülke</li>
                            <li>Doğum tarihi</li>
                            <li>Doğum yeri</li>
                            <li>İmza</li>
                            <li>TC kimlik No</li>
                            <li>Yaş</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Gerçek veya özel hukuk tüzel kişileri</li>
                            <li>Yetkili kamu kurum ve kuruluşları</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                            <li>Finans ve Muhasebe İşlerinin Yürütülmesi </li>
                            <li>Hukuk İşlerinin Takibi ve Yürütülmesi</li>
                            <li>İletişim Faaliyetlerinin Yürütülmesi</li>
                            <li>İş Faaliyetlerinin Yürütülmesi / Denetimi</li>
                            <li>İş Sürekliliğinin Sağlanması Faaliyetlerinin Yürütülmesi</li>
                            <li>Lojistik Faaliyetlerinin Yürütülmesi</li>
                            <li>Mal / Hizmet Satın Alım Süreçlerinin Yürütülmesi</li>
                            <li>Mal / Hizmet Satış Süreçlerinin Yürütülmesi</li>
                            <li>Mal / Hizmet Üretim ve Operasyon Süreçlerinin Yürütülmesi</li>
                            <li>Sözleşme Süreçlerinin Yürütülmesi</li>
                            <li>Talep / Şikayetlerin Takibi</li>
                            <li>Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (c): Sözleşmenin kurulması veya ifası <br />
                          6698 sk. madde 5/2 (ç): Hukuki yükümlülük <br />
                          6698 sk. madde 5/2 (f): Meşru menfaat
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </Accordion>
          <Accordion title="Ziyaretçilerin">
            <div className="table-responsive">
              <table className="page-table">
                <thead>
                    <tr>
                      <th colSpan="3">
                          <h3>KİMLİK VERİSİ</h3>
                      </th>
                    </tr>
                    <tr>
                      <th>Kimlik Verisine Ait Veriler</th>
                      <th>Aktarım Yapılan Taraflar</th>
                      <th>Kişisel Verinin İşlenme Amacı</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                          <ul>
                            <li>Ad Soyad</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Yetkili kamu kurum ve kuruluşları</li>
                          </ul>
                      </td>
                      <td>
                          <ul>
                            <li>Bilgi Güvenliği Süreçlerinin Yürütülmesi</li>
                            <li>Faaliyetlerin Mevzuata Uygun Yürütülmesi</li>
                            <li>Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi</li>
                            <li>Ziyaretçi Kayıtlarının Oluşturulması ve Takibi</li>
                          </ul>
                      </td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                      <th colSpan="3">Hukuki Sebepler</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td colSpan="3" className="text-center">
                          6698 sk. madde 5/2 (a): Kanunlarda Açıkça Öngörülme <br />
                          6698 sk. madde 5/2 (ç): Hukuki yükümlülük
                      </td>
                    </tr>
                </tbody>
              </table>
          
            </div>
            </Accordion>
        </Accordion>
        <Accordion title=" 4. Kişisel Verilerinizin Toplanma Yöntemi ve Hukuki Sebebi ">
          <p>Kişisel verileriniz RASYOTEK tarafından Kanun’un 5. ve 6. maddelerinde belirtilen <i>“Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” </i> ve <i>“Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması.” </i> hukuki sebeplerine dayalı olarak ve ayrıca belirli süreçlerde açık rızanız dahilinde e-posta, internet sitesi, açık internet kaynakları, sosyal medya, telefon, SMS ve çağrı merkezi kanallarıyla elektronik ortamda veya elden teslim ve posta kanallarıyla fiziki ortamda toplanabilecektir.</p>
        </Accordion>
        <Accordion title="5. Kişisel Veri Sahibi Olarak Kanun’un 11. Maddesinde Sayılan Haklarınız ">
          <p>Kanun’un 11. maddesi uyarınca, veri sahipleri olarak aşağıdaki haklara sahip olduğunuzu bildiririz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li>Kanun’a ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme, </li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkması durumunda buna itiraz etme,</li>
            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme. </li>
          </ul>
        </Accordion>
      </PageContent>
    </Layout>
  );
}

export default Page;
