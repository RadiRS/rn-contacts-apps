import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';

import Icon from '../icon';

import styles from './styles';

const AppModal = ({
  modalVisible,
  modalFooter,
  modalBody,
  title,
  setModalVisible,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.9}
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Icon size={27} type="evil" name="close" />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RNContacts'}</Text>
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{modalBody}</View>
            {modalFooter}
            {!modalFooter && (
              <View>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

AppModal.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
  //closeOnTouchOutside: true,
};

export default AppModal;
