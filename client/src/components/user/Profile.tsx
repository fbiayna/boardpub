/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Profile'
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { LoginReducer } from '../../utils/interfaces'
import { skylabLogo } from '../../utils/images'

function Profile ({ user }:LoginReducer) {
  return (
    <View testID={'list-profile'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.profile}>
            <Text style={style.profileText}>Tu Perfil</Text>
        </View>
      </View>
      <ScrollView>
        <View style={style.photoContainer}>
          <View style={style.photoPreContainer}>
            <ImageBackground source={{ uri: user?.photo }} style={style.photo} imageStyle={{ borderRadius: 50 }}></ImageBackground>
          </View>
        </View>
        <View style={style.descriptionContainer}>
          <Text style={style.infoProfile}>INFORMACIÓN DEL USUARIO</Text>
          <View style={style.allDescriptionContainer}>
            <View style={style.textContainer}>
              <Text style={style.title}>Nombre:</Text>
              <Text style={style.description}>{user?.name}</Text>
            </View>
            <View style={style.textContainer}>
              <Text style={style.title}>Apellidos:</Text>
              <Text style={style.description}>{user?.surname}</Text>
            </View>
            <View style={style.textContainer}>
              <Text style={style.title}>Email:</Text>
              <Text style={style.description}>{user?.email}</Text>
            </View>
          </View>
          {user?.admin ? <View style={style.adminContainer}><Text style={style.admin}>Tu perfil es administrador</Text></View> : <View style={style.adminContainer}><Text style={style.admin}>Tu perfil no es administrador</Text></View>}
        </View>
        <View style={style.signOutContainerTotal}>
          <View style={style.signOutContainer}>
            <TouchableOpacity testID='signOut' style={style.signOut} onPress={() => firebase.auth().signOut()} activeOpacity={0.8}>
              <Text style={style.signOutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.skylabContainer}>
          <View style={style.skylabPreContainer}>
            <ImageBackground source={skylabLogo()} style={style.skylab} imageStyle={{ borderRadius: 50 }}></ImageBackground>
          </View>
          <Text style={style.footerText}>Skylab Coders Academy</Text>
          <Text style={style.footerText}>2020-2021</Text>
        </View>
      </ScrollView>
    </View>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  return {
    user: loginReducer.user,
    userState: loginReducer.userState
  }
}
export default connect(mapStateToProps)(Profile)
