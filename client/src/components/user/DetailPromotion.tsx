/* eslint-disable no-use-before-define */
import React, { useCallback } from 'react'
import { DetailReducer, Establishment } from '../../utils/interfaces'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useRoute, useFocusEffect } from '@react-navigation/native'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { requestPromotion } from '../../actions/promotionsFunctions'
import { addFavorite } from '../../actions/userFunctions'
import style from '../styles/DetailPromotion'
import GoBack from './navigation/GoBack'

function DetailPromotion ({ user, promotion, dispatch }: DetailReducer) {
  const route = useRoute()
  const { id }:any = route.params

  useFocusEffect(
    useCallback(() => { dispatch(requestPromotion(id)) }, [id]))

  return (
    <View testID={'detail'} style={style.container}>
      {!promotion || promotion._id !== id
        ? <Loading />
        : <>
        <GoBack/>
        <ScrollView>
            <View style={style.imageContainer}>
              <ImageBackground source={{ uri: promotion.establishment.photo }} style={style.promotionImage} >
                <View style={style.priceContainer}>
                  <Text style={style.price}>{promotion.price}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={style.infoContainer}>
              <View style={style.titleContainer}>
                <Text style={style.title}>{promotion.name}</Text>
                <Text style={style.establishment}>{promotion.establishment.name}</Text>
              </View>
              {user?.favorites?.find((establishment: Establishment) => establishment._id.toString() === promotion.establishment._id.toString())
                ? null
                : <TouchableOpacity style={style.addButton} testID="addFavorite" onPress={() => dispatch(addFavorite(user, promotion.establishment._id))} activeOpacity={0.9}>
                    <View style={style.addContainer}>
                      <Icon name="star" size={35} style={style.star}/>
                    </View>
              </TouchableOpacity>
              }
            </View>
            <View style={style.otherInfoContainer}>
              <View style={style.otherContainer}>
                <View style={style.dateContainer}>
                  <Icon name="schedule" size={18} style={style.schedule}/>
                  <Text style={style.date}>{promotion.date}</Text>
                </View>
                <View style={style.dateContainer}>
                  <Icon name="place" size={18} style={style.schedule}/>
                  <Text style={style.ubication}>{promotion.establishment.ubication} - {promotion.establishment.city}</Text>
                </View>
              </View>
            </View>
            <View style={style.descriptionContainer}>
              <Text style={style.infoPromo}>INFORMACIÓN DE LA PROMOCIÓN</Text>
              <Text style={style.description}>{promotion.description}</Text>
            </View>
            <View style={style.valorationsContainer}>
              <Text style={style.infoValoration}>VALORACIONES</Text>
              <View style={style.numbersContainer}>
                <View style={style.valContainer}>
                  <Text style={style.numbersValoration}>{promotion.establishment.rating}/5.0</Text>
                </View>
                <Text style={style.textValoration}>{promotion.establishment.name} está muy bien valorado por parte de los usuarios</Text>
              </View>
            </View>
            <View style={style.opinionContainer}>
              <View style={style.opinionTextContainer}>
                <Text style={style.opinionText}>¿Qué opinas de {promotion.establishment.name}?</Text>
              </View>
              <View style={style.opinionStarContainer}>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
              </View>
            </View>
          </ScrollView>
          </>
      }
    </View>
  )
}

function mapStateToProps ({ boardPubReducer, loginReducer }: any) {
  return {
    promotion: boardPubReducer.promotion,
    user: loginReducer.user
  }
}
export default connect(mapStateToProps)(DetailPromotion)
