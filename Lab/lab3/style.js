import {StyleSheet} from "react-native";


export const colors={
  primary: '#1E90FF',      
  textDark: '#333333',  
  textLight: '#666666', 
  discount: '#2E7D32',   
  background: '#FFFFFF', 
  cardBg: '#F5F5F5',        
  shadow: '#000000', 
  navigator: '#f3edf7',
  active: '#e8def8',
  addHeader: '#6200EE',
}
export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textDark,
    marginLeft: 16,
    marginBottom: 10,
  },
  addHeaderTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.addHeader,
    marginBottom: 10,
  },  
  searchTitle:{
    fontSize: 13,
    
  },
  searchCard: {
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchImage: {
    height: 180,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.cardBg,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    padding: 12,
    
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftColumn: {
    width: 90,
    height: 90,
    marginRight: 12,
  },
  productImage :{
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },
  rightColumn: {
    flex:1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  infoContainer: {
    marginBottom: 12,
  },
  infoLine:{
    fontSize: 13,
    color: colors.textLight,
    marginBottom: 4,
    flexShrink:1,
  },
  boldLabel: {
    fontSize:15,
    fontWeight: "bold",
    color: colors.textDark,
  },
  discountText: {
    color: colors.discount,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent:"space-between",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    paddingHorizontal:10,
    paddingVertical: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight:"bold",
  },
  bottomNav: {
    flexDirection:"row",
    height: 60,
    backgroundColor:colors.navigator,
    justifyContent:"space-between",    
    alignItems:"center",
  },
  navButton: {
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    flex:1,
  },
  iconContainerActive: {
    backgroundColor: colors.active,
    paddingVertical: 4,
    paddingHorizontal:15,
    borderRadius:15,
    marginBottom: 4,
  },

});