import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backimage: {
    opacity: 0.8,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  shadow: {
    width: '100%',
    height: '100%',
    opacity: 1,
    backgroundColor: '#000'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2.5
  },
  image: {
    width: 320,
    height: 100
  },
  textSlogan: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAction: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    width: 250,
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textSearch: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  user: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonUser: {
    width: 260,
    height: 60,
    backgroundColor: '#92000A',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  textUser: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  },
  admin: {
    flex: 2,
    alignItems: 'center'
  },
  buttonAdmin: {
    width: 260,
    height: 60,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  textAdmin: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  }
})

export default style
