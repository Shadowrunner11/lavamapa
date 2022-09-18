import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Peru from '../../assets/peru.json';
import { makeRandomColor } from '../../utils';

const  MapChart = () => {
  return (
    <ComposableMap
      projectionConfig={{
        center: [-17,11],
        rotate: [58, 20, 0],
        scale : 1500
      }}
      projection="geoConicEquidistant" >
      <Geographies geography={Peru}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={makeRandomColor()}
              stroke="#000000"/>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;