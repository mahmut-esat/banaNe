import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkgreen,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 7,
  },
  inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  user: {
    color: 'white',
    fontSize: 13,
  },
  date: {
    color: 'white',
    fontSize: 13,
  },
  content: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dislike_container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 30,
    padding: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dislike_count_container: {
    width: 25,
    alignItems: 'center',
    backgroundColor: colors.darkgreen,
    borderRadius: 15,
  },
  dislike_count_text: {
    color: 'white',
  },
  dislike_text: {
    color: colors.darkgreen,
  },
});
