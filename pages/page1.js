import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Copy21 from "../icons/logo.png";
import coffeeRoastery from "../assets/coffeeRoastery.png";

const Page1 = () => {
  return (
    <View style={styles.page}>
      <View style={styles.overlapGroupWrapper}>
        <View style={styles.overlapGroup}>
          <Image style={styles.elementCopy} source={Copy21} />
          <Text style={styles.textWrapper}>DISHONCLICK</Text>
          <Image style={styles.coffeeRoastery} source={coffeeRoastery} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#E3D5CA", // Background halaman utama diubah menjadi E3D5CA
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // Pastikan tinggi halaman penuh
  },
  overlap: {
    position: "absolute",
    top: 75,
    width: 411,
    height: 473,
    textAlign: "center",
    alignItems: "center", // Memusatkan elemen secara horizontal
    justifyContent: "center", // Memusatkan elemen secara vertikal
    flexDirection: "column", // Mengatur elemen menjadi vertikal
    flex: 1,
    backgroundColor: "#E3D5CA", // Memberikan background E3D5CA pada overlap
  },
  overlapGroupWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 60, // Memberikan padding agar konten tidak terlalu rapat dengan tepi

    justifyContent: "center", // Menjaga semua konten berada di tengah
    backgroundColor: "#E3D5CA", // Background wrapper juga menggunakan E3D5CA
    flex: 1, // Mengatur agar wrapper mengisi seluruh ruang yang ada
  },
  overlapGroup: {
    position: "relative", // Menggunakan positioning relatif
    alignItems: "center", // Memusatkan semua elemen dalam overlapGroup
    backgroundColor: "#E3D5CA", // Menambahkan background E3D5CA pada grup
    paddingTop: 20, // Memberikan jarak antara konten dan bagian atas
  },
  elementCopy: {
    width: 300, // Sesuaikan dengan ukuran gambar
    height: 300, // Sesuaikan dengan ukuran gambar
    resizeMode: "contain", // Memastikan gambar tampil proporsional
    marginBottom: 10, // Memberikan jarak antara gambar dan teks
  },
  coffeeRoastery: {
    width: 200, // Sesuaikan dengan ukuran gambar
    height: 50, // Sesuaikan dengan ukuran gambar
    resizeMode: "contain", // Memastikan gambar tampil proporsional
    marginTop: 0, // Memberikan jarak antara gambar dan teks
  },
  textWrapper: {
    fontSize: 25,
    fontWeight: "500",
    color: "#000", // Warna teks tetap hitam, bisa disesuaikan
    marginTop: 0, // Memberikan jarak antara gambar dan teks
    backgroundColor: "#E3D5CA", // Memberikan background E3D5CA pada teks
    paddingHorizontal: 0, // Memberikan padding agar teks tidak terlalu menempel di tepi
    textAlign: "center", // Memastikan teks terpusat
  },
});

export default Page1;
