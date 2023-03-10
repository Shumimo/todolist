// New input whenever "Submit" button has interaction

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input")
	const list_el = document.querySelector("#tasks");
	const submit = document.querySelector('#submit-btn');
	var count = 0;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		count += 1;

	const tasks = input.value;

	if (!tasks) {
		input.setAttribute('required', 'required');
		return;
	};

	if (count >= 5) {
		submit.setAttribute('disabled', 'disabled');
	};
 	
	// Create input group
	const task_input_group_el = document.createElement('div');
	task_input_group_el.classList.add('input-group');
	task_input_group_el.classList.add('mb-3');

	// Append input group to #task
	list_el.appendChild(task_input_group_el);

	// Create checkbox
	const task_checkbox_el = document.createElement('div');
	task_checkbox_el.classList.add('input-group-text');
	
	const task_checkbox_input_el = document.createElement('input');
	task_checkbox_input_el.classList.add('form-check-input');
	task_checkbox_input_el.type = 'checkbox';

	// Append checkbox div to input group
	task_input_group_el.appendChild(task_checkbox_el);

	task_checkbox_input_el.addEventListener('click', (e) => {
		task_input_form.style.textDecoration = 'line-through';
		task_input_form.style.color = 'gray';
	});

	// Append checkbox bootstrap to checkbox div
	task_checkbox_el.appendChild(task_checkbox_input_el);

	// Create input form
	const task_input_form = document.createElement('input');
	task_input_form.classList.add('form-control');
	task_input_form.type = 'text';
	task_input_form.value = tasks;
	task_input_form.setAttribute('readonly', 'readonly');

	// Append input to input group
	task_input_group_el.appendChild(task_input_form);

	// Create edit button
	const form_edit = document.createElement('button');
	form_edit.type = 'button';
	form_edit.classList.add('btn');
	form_edit.classList.add('btn-warning');
	form_edit.classList.add('px-2');
	form_edit.classList.add('px-md-3');
	form_edit.classList.add('px-lg-3');
	form_edit.innerText = "Edit";

	// Append edit button to input group
	task_input_group_el.appendChild(form_edit);

	// if statement for editing input
	form_edit.addEventListener('click', (e) => {
			if (form_edit.innerText == "Edit") {
				form_edit.innerText = "Save";
				task_input_form.removeAttribute('readonly');
				task_input_form.focus();
			} else {
				form_edit.innerText = "Edit";
				task_input_form.setAttribute('readonly', 'readonly');
			};
		});

	// Create delete button
	const form_delete = document.createElement('button')
	form_delete.type = 'button';
	form_delete.classList.add('btn');
	form_delete.classList.add('btn-danger');
	form_delete.classList.add('px-2');
	form_delete.classList.add('px-md-2');
	form_delete.classList.add('px-lg-2');
	form_delete.innerText = "Delete";
	
	// Append delete button to input group
	task_input_group_el.append(form_delete);

	form_delete.addEventListener('click', (e)=> {
			list_el.removeChild(task_input_group_el);
			submit.removeAttribute('disabled', 'disabled');
			count -= 1;
		});
	});
});