import {StyleSheet,ScrollView, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/AntDesign'



const Payment = ({navigation}) => {
  // const [isProceed,setIsProceed]=useState(false)
  const [bill1,setBill1]=useState(150);
  const [bill2,setBill2]=useState(180);
  const [bill3,setBill3]=useState(200);
  const [gst,setGst]=useState(30);
  const [totalBill,setTotabBill]=useState(bill1+bill2+bill3+gst);
  return (
    <ScrollView>
      <View>
     <View style={[styles.imgCont]}>
     <Image  style={styles.image} source={require('../../assets/images/Screenshotpayments.png')}/>
     </View>
     <View style={styles.col}>
      <View style={styles.row}>
        <Text style={styles.innerchargesec}>Service Charges</Text>
        <Text style={styles.rupees} >&#8377;{bill1}</Text>
        </View>
      <View style={styles.row}>
        <Text style={styles.innerchargesec}>Cleaning Charges</Text>
        <Text style={styles.rupees} t>&#8377;{bill2}</Text>
        </View>
      <View style={styles.row}>
        <Text style={styles.innerchargesec}>Service Charges</Text>
        <Text style={styles.rupees} >&#8377;{bill3}</Text>
        </View>
      <View style={styles.row}  >
        <Text style={styles.innerchargesec}>GST</Text>
        <Text style={styles.rupees} >&#8377;{gst}</Text>
        </View>
     <View style={styles.hr}/>
     <View style={styles.totalouter} >
     <Text style={styles.totaltext}>Total</Text>
     <Text style={styles.rupees} >&#8377;{totalBill}</Text>
     </View>
     </View>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('PaymentMethods',{totalBill})}>
        <Text style={styles.btnText}>Proceed</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  image:{
    width:'100%',
    height:200,

  },
  imgCont:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:20,
    shadowColor: '#5D5FEF',
    elevation:8,
    // borderColor:'red',
    marginVertical:20

  },
  innerchargesec:{
    color:'black',
    fontSize:16,

 },

  rupees:{
    // backgroundColor:'blue',
    color:'black',
    fontSize:16,
    display:'flex',
    flexDirection:'row-reverse'
  },

  row:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    color:'red',
    marginHorizontal:10,
    marginVertical:10
  },

  col:{
    display:'flex',
    flexDirection:'column',
    borderRadius:9,
    marginHorizontal:18,
    elevation:8,
    shadowColor: '#5D5FEF',
    backgroundColor:'white'

  },
 
  totalouter:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    marginVertical:40,

  },
 hr:{
  marginTop:15,
  backgroundColor:'black',
 width:'100%',
 height:1.5
 },
  totaltext:{
   color:'#121212',
   fontSize:16,

  },
  btn:{
    display:'flex',
    alignItems:'center',
    textAlign:'center',
    marginTop:50,
    height:40,
    marginBottom:65
    
  },
  btnText:{
    backgroundColor:'yellow',
    color:'white',
    backgroundColor:'#5D5FEF',
    borderRadius:9,
    paddingHorizontal:67,
    paddingVertical:10

  }
});
