export const addingNewUsername = (newName) => {
	return {
		type: "ADD_NEW_USERNAME",
		payload: { newName },
	};
};
