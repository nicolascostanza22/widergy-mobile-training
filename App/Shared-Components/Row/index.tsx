import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Expression} from '../../Redux/Calculator/types';
import {useDispatch} from 'react-redux';

interface Props {
  expression: Expression;
  handleEdit: (data: Expression, dispatch: any) => void;
  handleDelete: (id: string, dispatch: any) => void;
}

const Row: React.FC<Props> = ({
  expression: {expression, id},
  handleEdit,
  handleDelete,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [newExpression, setNewExpression] = useState<string>('');
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.modalContainer}>
          <Text style={[styles.text, styles.title]}>
            {isEditing ? 'Editar' : 'Eliminar'}
          </Text>
          <View style={styles.modalMessage}>
            {isEditing ? (
              <Text style={styles.text}>Expresion previa {expression}</Text>
            ) : (
              <>
                <Text style={styles.text}>
                  Seguro que desea eliminar la expresion
                </Text>
                <Text style={[styles.text, styles.expression]}>
                  {expression}
                </Text>
              </>
            )}
            {isEditing && (
              <TextInput
                placeholderTextColor={'#FFF'}
                style={[styles.text, styles.inputExpression]}
                onChangeText={setNewExpression}
                value={newExpression}
              />
            )}
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.actionButtons}
              onPress={() => {
                isEditing
                  ? handleEdit({id, expression: newExpression}, dispatch)
                  : handleDelete(id, dispatch);
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

export default Row;
