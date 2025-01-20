import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AllCoffee = ({ searchQuery= '' }) => {
  const products = [
    {
      id: 'all_1',
      name: 'Mead Raff',
      description: 'With Sugar',
      price: 50000,
      image: require("../../assets/meadRaff.png"),
      type: 'regular'
    },
    {
      id: 'all_2',
      name: 'Java Coffee',
      description: 'With Sugar',
      price: 35000,
      image: require("../../assets/javaCoffee.png"),
      type: 'regular'
    },
    {
      id: 'all_3',
      name: 'Turkish Coffee',
      description: 'With Sugar',
      price: 35000,
      image: require("../../assets/turkishCoffee.png"),
      type: 'special'
    },
    {
      id: 'all_4',
      name: 'Dish Ice Cream',
      description: 'With Sugar',
      price: 20000,
      image: require("../../assets/dishIceCream.png"),
      type: 'special'
    },
  ];

  
  const filteredProducts = searchQuery
  ? products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )
  : products;
  
  const specialProducts = filteredProducts.filter(p => p.type === 'special');
  const regularProducts = filteredProducts.filter(p => p.type === 'regular');
  
  return (
    <View style={styles.categoriesContainer}>
      {regularProducts.length > 0 && (
        <>
          <View style={styles.product}>
            <View style={styles.overlap4}>
              <Image
                source={regularProducts[0].image}
                style={styles.maskGroup}
              />
              <Text style={styles.textWrapper6}>{regularProducts[0].name}</Text>
              <Text style={styles.textWrapper7}>{regularProducts[0].description}</Text>
              <View style={styles.idr}>
                <View style={styles.overlapGroup2}>
                  <Text style={styles.textWrapper8}>{regularProducts[0].price.toLocaleString()}</Text>
                  <Text style={styles.textWrapper9}>Rp</Text>
                </View>
              </View>
              <Image
                source={require("../../icons/akar-icons-circle-plus-fill.png")}
                style={styles.akarIconsCircle}
              />
            </View>
          </View>

          {regularProducts.length > 1 && (
            <View style={styles.product5}>
              <View style={styles.overlap7}>
                <Image
                  source={regularProducts[1].image}
                  style={styles.maskGroup4}
                />
                <Text style={styles.textWrapper6}>{regularProducts[1].name}</Text>
                <Text style={styles.textWrapper7}>{regularProducts[1].description}</Text>
                <View style={styles.idr}>
                  <View style={styles.overlapGroup2}>
                    <Text style={styles.textWrapper8}>{regularProducts[1].price.toLocaleString()}</Text>
                    <Text style={styles.textWrapper9}>Rp</Text>
                  </View>
                </View>
                <Image
                  source={require("../../icons/akar-icons-circle-plus-fill.png")}
                  style={styles.akarIconsCircle}
                />
              </View>
            </View>
          )}
        </>
      )}

      {/* Special Products Header */}
      {specialProducts.length > 0 && (
        <Text style={styles.textWrapper10}>Special Coffee</Text>
      )}

      {/* Special Products */}
      {specialProducts.length > 0 && (
        <>
          <View style={styles.product3}>
            <View style={styles.overlap5}>
              <Image
                source={specialProducts[0].image}
                style={styles.maskGroup2}
              />
              <Text style={styles.textWrapper11}>{specialProducts[0].name}</Text>
              <Text style={styles.textWrapper12}>{specialProducts[0].description}</Text>
              <View style={styles.idr2}>
                <View style={styles.overlapGroup3}>
                  <Text style={styles.textWrapper8}>{specialProducts[0].price.toLocaleString()}</Text>
                  <Text style={styles.textWrapper13}>Rp</Text>
                </View>
              </View>
              <Image
                source={require("../../icons/akar-icons-circle-plus-fill.png")}
                style={styles.akarIconsCircle2}
              />
            </View>
          </View>

          {specialProducts.length > 1 && (
            <View style={styles.product4}>
              <View style={styles.overlap6}>
                <Image
                  source={specialProducts[1].image}
                  style={styles.maskGroup3}
                />
                <Text style={styles.textWrapper14}>{specialProducts[1].name}</Text>
                <Text style={styles.textWrapper15}>{specialProducts[1].description}</Text>
                <View style={styles.idr3}>
                  <View style={styles.overlapGroup4}>
                    <Text style={styles.textWrapper16}>{specialProducts[1].price.toLocaleString()}</Text>
                    <Text style={styles.textWrapper13}>Rp</Text>
                  </View>
                </View>
                <Image
                  source={require("../../icons/akar-icons-circle-plus-fill.png")}
                  style={styles.akarIconsCircle3}
                />
              </View>
            </View>
          )}
        </>
      )}

      {/* Show message if no products found */}
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 45,
    top: 5
  },
  product: {
    height: 208,
    left: 17,
    position: "absolute",
    top: 60,
    width: 183,
  },
  product5: {
    height: 208,
    left: 218,
    position: "absolute",
    top: 60,
    width: 183,
  },
  product3: {
    height: 193,
    left: 17,
    position: "absolute",
    top: 310,
    width: 182,
  },
  product4: {
    height: 193,
    left: 218,
    position: "absolute",
    top: 310,
    width: 179,
  },
  overlap4: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { 
      width: 0, 
      height: 4 
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    height: 208,
    width: 179,
  },
  overlap5: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    boxShadow: "0px 4px 4px #00000040",
    height: 193,
    position: "relative",
    width: 178,
  },
  overlap6: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    boxShadow: "0px 4px 4px #00000040",
    height: 193,
    position: "relative",
    width: 175,
  },
  overlap7: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    boxShadow: "0px 4px 4px #00000040",
    height: 208,
    position: "relative",
    width: 179,
  },
  maskGroup: {
    height: 113,
    left: 1,
    position: "absolute",
    top: 4,
    width: 173,
  },
  maskGroup2: {
    height: 113,
    left: 1,
    position: "absolute",
    top: 4,
    width: 173,
  },
  maskGroup3: {
    height: 105,
    left: 5,
    position: "absolute",
    top: 4,
    width: 167,
  },
  maskGroup4: {
    height: 113,
    left: 1,
    position: "absolute",
    top: 4,
    width: 173,
  },
  textWrapper6: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    top: 129,
    width: 112,
  },
  textWrapper7: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    fontWeight: "400",
    left: 16,
    position: "absolute",
    top: 153,
    width: 73,
  },
  textWrapper8: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    position: "absolute",
    top: 5,
    width: 80,
  },
  textWrapper9: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    top: 0,
    width: 24,
  },
  textWrapper10: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "bold",
    left: 27,
    position: "absolute",
    top: 280,
    width: 168,
  },
  textWrapper11: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    top: 120,
    width: 111,
  },
  textWrapper12: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    fontWeight: "400",
    left: 16,
    position: "absolute",
    top: 142,
    width: 73,
  },
  textWrapper13: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    fontWeight: "600",
    left: 0,
    position: "absolute",
    top: 0,
    width: 23,
  },
  textWrapper14: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    fontWeight: "600",
    left: 16,
    position: "absolute",
    top: 120,
    width: 109,
  },
  textWrapper15: {
    color: "#000000",
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
    fontWeight: "400",
    left: 16,
    position: "absolute",
    top: 142,
    width: 71,
  },
  textWrapper16: {
    color: "#000000",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 18,
    fontWeight: "600",
    left: 20,
    position: "absolute",
    top: 5,
    width: 78,
  },
  idr: {
    height: 26,
    left: 16,
    position: "absolute",
    top: 170,
    width: 104,
  },
  idr2: {
    height: 24,
    left: 16,
    position: "absolute",
    top: 158,
    width: 104,
  },
  idr3: {
    height: 24,
    left: 16,
    position: "absolute",
    top: 158,
    width: 102,
  },
  overlapGroup2: {
    height: 26,
    position: "relative",
    width: 100,
  },
  overlapGroup3: {
    height: 24,
    position: "relative",
    width: 100,
  },
  overlapGroup4: {
    height: 24,
    position: "relative",
    width: 98,
  },
  akarIconsCircle: {
    height: 36,
    left: 128,
    position: "absolute",
    top: 161,
    width: 39,
  },
  akarIconsCircle2: {
    height: 33,
    left: 128,
    position: "absolute",
    top: 149,
    width: 39,
  },
  akarIconsCircle3: {
    height: 33,
    left: 125,
    position: "absolute",
    top: 149,
    width: 38,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 16,
    color: '#666',
    fontFamily: "Montserrat-Regular",
  }
});

export default AllCoffee;