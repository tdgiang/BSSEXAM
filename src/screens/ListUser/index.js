import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import ListUserView from './view';
import {getListUser} from '../../apis/Functions/ListUser';
import {connect} from 'react-redux';
import {hideLoading, showLoading} from '../../actions/loadingAction';
import {showAlert, TYPE} from '../../components/DropdownAlert';

const ListUser = ({hideLoading, showLoading}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    showLoading();
    const response = await getListUser({size: 10});
    hideLoading();
    if (response.status == 200 && response.data) {
      console.log('response.data', response.data);
      setData(response.data);
    } else {
      showAlert(TYPE.WARN, 'Thông báo!', 'Không có dữ liệu!');
    }
  };

  const onRefetch = () => getData();

  return <ListUserView data={data} onRefetch={onRefetch} />;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {showLoading, hideLoading})(ListUser);
