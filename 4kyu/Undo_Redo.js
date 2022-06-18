'use strict';
/* The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

set(key, value) Assigns the value to the key. If the key does not exist, creates it.

get(key) Returns the value associated to the key.

del(key) removes the key from the object.

undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After set() or del() are called, there is nothing to redo.

All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

Any set/del after an undo should disallow new undos. */

function undoRedo(object) {
  // Store our last actions and our undone actions
  let lastActions = [];
  let undoneActions = [];

  // Return our undo/redo functions
  return {
    // Sets or edits a key in the object to the given value
    set: function (key, value) {
      // Check to see if the key is already present
      // This will determine what we put in our undo queue
      if (object[key]) {
        lastActions.push(['edit', key, object[key], value]); //object[key] -> last existing value before set
      } else {
        lastActions.push(['set', key, value]); // new prop
      }
      // Set the value
      object[key] = value;
      // This is a new action. Destroy all undoneActions
      undoneActions = [];
    },
    // Get property
    get: function (key) {
      return object[key];
    },
    // Remove property
    del: function (key) {
      // If prop is exist - delete it
      if (object[key]) {
        // Register the action in our undo array
        lastActions.push(['del', key, object[key]]);
        // Remove the property
        delete object[key];
        // This is a new action. Destroy all undoneActions
        undoneActions = [];
      }
    },
    // undo last action
    undo: function () {
      // Throw an exception if there's nothing in the last actions queue
      if (lastActions.length === 0) {
        throw new Error('No actions in the last actions queue');
      }
      // Grab the last action and pop it from the last actions array
      const popped = lastActions.pop();
      // Determine the operation that was performed and undo it
      if (popped[0] === 'set') {
        delete object[popped[1]];
      } else if (popped[0] === 'edit') {
        object[popped[1]] = popped[2];
      } else if (popped[0] === 'del') {
        object[popped[1]] = popped[2];
      }
      // Add the action to the list of undone actions
      undoneActions.push(popped);
    },
    // redo undone action
    redo: function () {
      // Throw an exception if there's nothing in the undone actions queue
      if (undoneActions.length === 0) {
        throw new Error('No actions in the undone actions queue');
      }
      // Grab the undone action and pop it from the undone actions array
      const popped = undoneActions.pop();
      // Determine the operation that was undone and redo it
      if (popped[0] === 'set') {
        object[popped[1]] = popped[2];
      } else if (popped[0] === 'edit') {
        object[popped[1]] = popped[3];
      } else if (popped[0] === 'del') {
        delete object[popped[1]];
      }
      // Add the action to the list of previous actions
      lastActions.push(popped);
    },
  };
}
