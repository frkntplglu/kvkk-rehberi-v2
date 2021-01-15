import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>VERBİS Son Kayıt Tarihleri – 2020 Yılı Güncel Tablo</title>
      </Head>
      <PageContent  pageTitle="Verbis">
        <div className="table-container">
          <table className="verbis-table">
            <thead>
              <tr>
                <th className="light" colSpan="3">
                  <h1>KİŞİSEL VERİLERİ KORUMA KURULUNCA 6698 SAYILI KANUNUN GEÇİCİ 1 İNCİ MADDESİNE(*) GÖRE İLAN EDİLEN VERİ SORUMLULARI SİCİLİNE KAYIT TARİHLERİ</h1>
                </th>
              </tr>
              <tr>
                <th>Veri Sorumluları</th>
                <th>Kayıt yükümlülüğü başlangıç tarihi	</th>
                <th>Kayıt için son tarih</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Yıllık çalışan sayısı 50’den çok veya yıllık mali bilanço toplamı 25 milyon TL’den çok olan veri sorumluları
                </td>
                <td>01.10.2018</td>
                <td>30.09.2020</td>
              </tr>
              <tr>
                <td>Yurtdışında yerleşik veri sorumluları</td>
                <td>01.10.2018</td>
                <td>30.09.2020</td>
              </tr>
              <tr>
                <td>
                Yıllık çalışan sayısı 50’den az ve yıllık mali bilanço toplamı 25 milyon TL’den az olup ana faaliyet konusu özel nitelikli kişisel veri işleme olan veri sorumluları
                </td>
                <td>01.01.2019</td>
                <td>31.03.2021</td>
              </tr>
              <tr>
                <td>
                Kamu kurum ve kuruluşu veri sorumluları
                </td>
                <td>01.04.2019</td>
                <td>31.03.2021</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="3"><b>(*)GEÇİCİ MADDE 1-(2)</b> Veri sorumluları,Kurul tarafından belirlenen ve ilan edilen süre içinde Veri Sorumluları Siciline kayıt yaptırmak zorundadır.</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </PageContent>
    </Layout>
  );
}

export default Page;
