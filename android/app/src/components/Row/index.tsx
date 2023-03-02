import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Expression} from '../../Redux/Calculadora/types';

interface Props {
  expression: Expression;
  handleAction: (id: string, type: string, data?: string) => void;
}

const Row: React.FC<Props> = ({expression: {expression, id}, handleAction}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [newExpression, setNewExpression] = useState<string>('');
  return (
    <SafeAreaView>
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.text, styles.title]}>
            {isEditing ? 'Editar' : 'Eliminar'}
          </Text>
          <TextInput
            placeholderTextColor={'#FFF'}
            style={styles.text}
            onChangeText={setNewExpression}
            value={newExpression}
            placeholder={expression}
            keyboardType="numeric"
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.actionButtons}
              onPress={() => {
                isEditing
                  ? handleAction(id, 'editar', newExpression)
                  : handleAction(id, 'eliminar');
                setShowModal(false);
              }}>
              <Text style={styles.text}>
                {isEditing ? 'Editar' : 'Eliminar'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButtons}
              onPress={() => {
                setNewExpression('');
                setShowModal(false);
              }}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Text style={styles.text}>{expression}</Text>
        <View style={styles.showModalButtons}>
          <TouchableOpacity
            onPress={() => {
              setIsEditing(true);
              setShowModal(true);
            }}>
            <Text style={styles.text}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsEditing(false);
              setShowModal(true);
            }}>
            <Text style={styles.text}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingVertical: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    color: '#FFF',
  },
  item: {
    fontSize: 20,
    color: '#FFF',
    paddingRight: 15,
  },
  showModalButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  modalContainer: {
    backgroundColor: '#434748',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    height: '70%',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
  },
  buttons: {
    height: 80,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    gap: 10,
  },
  actionButtons: {
    backgroundColor: '#966BDE',
    height: 40,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default Row;
