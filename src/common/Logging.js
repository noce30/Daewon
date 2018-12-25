import Reactotron from 'reactotron-react-native'

function Logging() {};

Logging.log = function(log){
  Reactotron.log(log)
}

export default Logging;
