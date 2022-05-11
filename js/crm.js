(() => {

  // API

  // Get clients from server

  const URL = 'http://localhost:3000';

  async function getClients() {

    const clients = fetch(`${URL}/api/clients`)
      .then(response => response.json());

    return clients;

  }

  // Get client from sever by ID

  async function getClient(id) {

    const client = fetch(`${URL}/api/clients/${id}`)
    .then(response => response.json());

    return client;

  }

  // Add client to the database

  async function addClient(client) {

    const response = fetch(`${URL}/api/clients`, {
      method: 'POST',
      body: JSON.stringify(client),
    });

  }

  // Change client on the server

  async function editClient(client) {

    const response = fetch(`${URL}/api/clients/${client.id}`, {
      method: 'PATCH',
      body: JSON.stringify(client),
    });

  }

  // Delete client from the server by ID

  async function deleteClient(id) {

    const response = fetch(`${URL}/api/clients/${id}`, {
      method: 'DELETE',
    });

  }

  // Contacts id <=> text

  const contactIdToText = {
    'vk': 'VK',
    'fb': 'Facebook',
    'tel': 'Телефон',
    'email': 'E-mail',
    'other': 'Другое',
  };

  const contactTextToId = {
    'VK': 'vk',
    'Facebook': 'fb',
    'Телефон': 'tel',
    'E-mail': 'email',
    'Другое': 'other',
  };

  // Create Header

  function createHeader() {

    const header = document.createElement('header');
    header.className = 'header';

    const container = document.createElement('div');
    container.className = 'container';

    const wrapper = document.createElement('div');
    wrapper.className = 'header__wrapper';

    // Create Logo

    const logo = document.createElement('div');
    logo.className = 'header__logo';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '12');
    circle.setAttribute('fill', '#9873FF');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M8.28545 13.8396C8.28545 14.3234 8.1167 14.6918 7.7792 14.9449C7.44451 15.198 6.94248 15.3246 6.27311 15.3246C5.92998 15.3246 5.63748 15.3007 5.39561 15.2529C5.15373 15.2079 4.92732 15.1404 4.71639 15.0504V13.9873C4.95545 14.0998 5.22404 14.194 5.52217 14.2699C5.82311 14.3459 6.08748 14.3838 6.31529 14.3838C6.78217 14.3838 7.01561 14.2488 7.01561 13.9788C7.01561 13.8776 6.98467 13.796 6.92279 13.7341C6.86092 13.6695 6.75404 13.5977 6.60217 13.519C6.45029 13.4374 6.24779 13.3432 5.99467 13.2363C5.63186 13.0845 5.36467 12.9438 5.19311 12.8145C5.02436 12.6851 4.90061 12.5374 4.82186 12.3715C4.74592 12.2027 4.70795 11.996 4.70795 11.7513C4.70795 11.3323 4.86967 11.0088 5.19311 10.781C5.51936 10.5504 5.98061 10.4351 6.57686 10.4351C7.14498 10.4351 7.69764 10.5588 8.23482 10.8063L7.8467 11.7345C7.61045 11.6332 7.38967 11.5502 7.18436 11.4855C6.97904 11.4209 6.76951 11.3885 6.55576 11.3885C6.17607 11.3885 5.98623 11.4912 5.98623 11.6965C5.98623 11.8118 6.0467 11.9116 6.16764 11.996C6.29139 12.0804 6.55998 12.2055 6.97342 12.3715C7.34186 12.5205 7.61186 12.6598 7.78342 12.7891C7.95498 12.9185 8.08154 13.0676 8.16311 13.2363C8.24467 13.4051 8.28545 13.6062 8.28545 13.8396ZM10.5256 12.6752L11.0867 11.958L12.4072 10.5237H13.8584L11.9853 12.5698L13.9723 15.2402H12.4873L11.1289 13.3291L10.5762 13.7721V15.2402H9.28951V8.67586H10.5762V11.6037L10.5087 12.6752H10.5256ZM17.2714 10.4351C17.8283 10.4351 18.2642 10.653 18.5792 11.089C18.8942 11.5221 19.0517 12.117 19.0517 12.8735C19.0517 13.6526 18.8886 14.2559 18.5623 14.6834C18.2389 15.1109 17.7973 15.3246 17.2376 15.3246C16.6836 15.3246 16.249 15.1235 15.934 14.7213H15.8454L15.6303 15.2402H14.6473V8.67586H15.934V10.203C15.934 10.3971 15.9172 10.7079 15.8834 11.1354H15.934C16.235 10.6685 16.6808 10.4351 17.2714 10.4351ZM16.8579 11.4645C16.5401 11.4645 16.3081 11.5629 16.1619 11.7598C16.0156 11.9538 15.9397 12.2759 15.934 12.7259V12.8651C15.934 13.3713 16.0086 13.7341 16.1576 13.9535C16.3095 14.1729 16.5486 14.2826 16.8748 14.2826C17.1392 14.2826 17.3487 14.1616 17.5034 13.9198C17.6609 13.6751 17.7397 13.3207 17.7397 12.8566C17.7397 12.3926 17.6609 12.0452 17.5034 11.8146C17.3459 11.5812 17.1308 11.4645 16.8579 11.4645ZM19.9334 14.637C19.9334 14.4007 19.9967 14.2221 20.1233 14.1012C20.2498 13.9802 20.434 13.9198 20.6759 13.9198C20.9094 13.9198 21.0894 13.9816 21.2159 14.1054C21.3453 14.2291 21.41 14.4063 21.41 14.637C21.41 14.8591 21.3453 15.0349 21.2159 15.1643C21.0865 15.2909 20.9065 15.3541 20.6759 15.3541C20.4397 15.3541 20.2569 15.2923 20.1275 15.1685C19.9981 15.042 19.9334 14.8648 19.9334 14.637Z');
    path.setAttribute('fill', 'white');

    svg.append(circle, path);
    logo.append(svg);

    // Create Search

    const search = document.createElement('input');
    search.className = 'header__search';
    search.setAttribute('type', 'text');
    search.setAttribute('placeholder', 'Введите запрос');

    // Add everything to Header

    wrapper.append(logo, search);
    container.append(wrapper);
    header.append(container);

    return header;
  }

  // Create Main

  function createCRM(clients) {

    const main = document.createElement('main');
    main.className = 'main';

    const section = document.createElement('section');
    section.className = 'clients';

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.className = 'clients__title';
    title.textContent = 'Клиенты';

    // Create Table

    const table = document.createElement('div');
    table.className = 'table clients__table';

    const tableHeader = document.createElement('div');
    tableHeader.className = 'table__header';

    function createTableColHeader(className, text, sortable = true) {

      const colHeader = document.createElement('div');
      colHeader.className = 'table__col-header';

      if (sortable) {
        const button = document.createElement('button');
        button.className = `btn table__col-sort-btn ${className}`;
        button.textContent = text;

        colHeader.append(button);
      } else {
        colHeader.classList.add(className);
        colHeader.textContent = text;
      }

      return colHeader;

    };

    tableHeader.append(createTableColHeader('table__col-id', 'ID'));
    tableHeader.append(createTableColHeader('table__col-name', 'Фамилия Имя Отчество'));
    tableHeader.append(createTableColHeader('table__col-created', 'Дата и время создания'));
    tableHeader.append(createTableColHeader('table__col-changed', 'Последние изменения'));
    tableHeader.append(createTableColHeader('table__col-contacts', 'Контакты', false));
    tableHeader.append(createTableColHeader('table__col-actions', 'Действия', false));

    table.append(tableHeader);

    function createTableRow({ id, createdAt, updatedAt, name, surname, lastName, contacts }) {

      const row = document.createElement('div');
      row.className = 'client table__row';

      const idCol = document.createElement('div');
      idCol.className = 'client__id table__col';
      idCol.textContent = id;

      const nameCol = document.createElement('div');
      nameCol.className = 'client__name table__col';
      nameCol.textContent = `${surname} ${name} ${lastName}`;

      const createdCol = document.createElement('div');
      createdCol.className = 'client__created table__col';
      createdCol.textContent = `${createdAt.slice(8, 10)}.${createdAt.slice(5, 7)}.${createdAt.slice(0, 4)} `;

      const createdTime = document.createElement('span');
      createdTime.className = 'gray-text';
      createdTime.textContent = `${createdAt.slice(11, 16)}`;

      createdCol.append(createdTime);

      const changedCol = document.createElement('div');
      changedCol.className = 'client__created table__col';
      changedCol.textContent = `${updatedAt.slice(8, 10)}.${updatedAt.slice(5, 7)}.${updatedAt.slice(0, 4)} `;

      const changedTime = document.createElement('span');
      changedTime.className = 'gray-text';
      changedTime.textContent = `${updatedAt.slice(11, 16)}`;

      changedCol.append(changedTime);

      const contactsCol = document.createElement('ul');
      contactsCol.className = 'lst client__contacts table__col';

      function createVkIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createFbIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createTelIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '8');
        circle.setAttribute('cy', '8');
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', '#9873FF');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z');
        path.setAttribute('fill', 'white');

        svg.append(circle, path);
        return svg;

      }

      function createEmailIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      function createOtherIcon() {

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 16 16');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z');
        path.setAttribute('fill-rule', 'evenodd');
        path.setAttribute('clip-rule', 'evenodd');
        path.setAttribute('fill', '#9873FF');

        svg.append(path);
        return svg;

      }

      const createIcon = {
        'vk': createVkIcon,
        'fb': createFbIcon,
        'tel': createTelIcon,
        'email': createEmailIcon,
        'other': createOtherIcon,
      }

      // Create client contacts list

      contacts.forEach((contact) => {

        const item = document.createElement('li');
        item.className = 'client__contact';

        const button = document.createElement('button');
        button.className = `btn client__contact-btn client__${contact.type}`;

        button.append(createIcon[contact.type]());

        const tooltip = document.createElement('div');
        tooltip.className = 'client__contact-tooltip';

        const tooltipText = document.createElement('span');
        tooltipText.className = 'contact__tooltip-text';
        tooltipText.textContent = `${contact.type}: `;

        const tooltipLink = document.createElement('a');
        tooltipLink.className = 'contact__tooltip-link';
        tooltipLink.href = '#';
        tooltipLink.textContent = contact.value;

        tooltip.append(tooltipText, tooltipLink);
        item.append(button, tooltip);
        contactsCol.append(item);

      });

      // Create edit/remove buttons

      const actionsCol = document.createElement('ul');
      actionsCol.className = 'lst client__actions table__col';

      const editItem = document.createElement('li');
      editItem.className = 'client__edit';

      const editButton = document.createElement('button');
      editButton.className = 'btn client__edit-btn';

      const editButtonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      editButtonSvg.setAttribute('width', '16');
      editButtonSvg.setAttribute('height', '16');
      editButtonSvg.setAttribute('viewBox', '0 0 16 16');
      editButtonSvg.setAttribute('fill', 'none');
      editButtonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const editButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      editButtonPath.setAttribute('d', 'M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z');
      editButtonPath.setAttribute('fill', '#9873FF');

      editButtonSvg.append(editButtonPath);

      const editButtonText = document.createElement('span');
      editButtonText.className = 'client__edit-text';
      editButtonText.textContent = 'Изменить';

      editButton.append(editButtonSvg, editButtonText);
      editItem.append(editButton);

      editButton.addEventListener('click', () => {
        document.body.style.overflow = 'hidden';
        document.body.append(createForm({ id, createdAt, updatedAt, name, surname, lastName, contacts }));
      });

      const removeItem = document.createElement('li');
      removeItem.className = 'client__remove';

      const removeButton = document.createElement('button');
      removeButton.className = 'btn client__remove-btn';

      const removeButtonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      removeButtonSvg.setAttribute('width', '16');
      removeButtonSvg.setAttribute('height', '16');
      removeButtonSvg.setAttribute('viewBox', '0 0 16 16');
      removeButtonSvg.setAttribute('fill', 'none');
      removeButtonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const removeButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      removeButtonPath.setAttribute('d', 'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z');
      removeButtonPath.setAttribute('fill', '#F06A4D');

      removeButtonSvg.append(removeButtonPath);

      const removeButtonText = document.createElement('span');
      removeButtonText.className = 'client__remove-text';
      removeButtonText.textContent = 'Удалить';

      removeButton.addEventListener('click', () => {
        deleteClient(id);
        row.remove();
      });

      // Add everything to the row

      removeButton.append(removeButtonSvg, removeButtonText);
      removeItem.append(removeButton);

      actionsCol.append(editButton, removeButton);

      row.append(idCol, nameCol, createdCol, changedCol, contactsCol, actionsCol);

      return row;

    }

    // Create table row for each client

    clients.forEach((client) => {
      table.append(createTableRow(client));
    });

    // Create "add client" button

    const addClientButton = document.createElement('button');
    addClientButton.className = 'clients__add-btn';
    addClientButton.textContent = 'Добавить клиента';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '23');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 23 16');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z');
    path.setAttribute('fill', '#9873FF');

    svg.append(path);
    addClientButton.prepend(svg);

    addClientButton.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      document.body.append(createForm());
    });

    // Add everything to Main

    container.append(title, table, addClientButton);
    section.append(container);
    main.append(section);

    return main;

  }

  // Create "create/edit client" pop-up

  function createForm(client = null) {

    const wrapper = document.createElement('div');
    wrapper.className = 'edit-form__wrapper';

    const form = document.createElement('form');
    form.className = 'edit-form';

    // Create text above inputs

    const formText = document.createElement('div');
    formText.className = 'edit-form__text';

    const title = document.createElement('h2');
    title.className = 'edit-form__title';
    title.textContent = client ? 'Изменить данные' : 'Новый клиент';

    const clientID = document.createElement('span');
    clientID.className = 'edit-form__id';
    clientID.textContent = client ? `ID: ${client.id}` : '';

    formText.append(title, clientID);

    // Create name, surname, lastName fields

    const fields = document.createElement('div');
    fields.className = 'edit-form__fields';

    function createField(inputLabel, inputValue = '', required = true) {

      const label = document.createElement('label');
      label.className = 'edit-form__label';

      const labelText = document.createElement('span');
      labelText.className = inputValue ? 'edit-form__label-text' : 'edit-form__label-text edit-form__label-text--empty';
      labelText.textContent = inputLabel;

      if (required) {
        const asterisk = document.createElement('span');
        asterisk.className = 'text-accent';
        asterisk.textContent = '*';
        labelText.append(asterisk);
      }

      const input = document.createElement('input');
      input.className = 'edit-form__input';
      input.type = 'text';
      input.value = inputValue;

      // Show labels above/into inputs

      input.addEventListener('input', () => {
        if (input.value === '') {
          labelText.classList.add('edit-form__label-text--empty');
        } else {
          labelText.classList.remove('edit-form__label-text--empty');
        }
      });

      label.append(labelText, input);

      return { label, input };

    }

    const surname = createField('Фамилия', client ? client.surname : '');
    fields.append(surname.label);

    const name = createField('Имя', client ? client.name : '');
    fields.append(name.label);

    const lastName = createField('Отчество', client ? client.lastName : '', false);
    fields.append(lastName.label);

    // Handling addContactButton appearance based on contacts amount

    let contactsAmount = 0;

    const contactsProxy = new Proxy({ amount: contactsAmount }, {

      set: (target, name, val) => {

        if (val >= 10) {

          target.amount = 10;
          addContactButton.remove();

        } else if (val > 0 && target.amount === 10) {

          target.amount = 9;
          contacts.append(addContactButton);

        } else if (val > 0 && target.amount === 0) {

          target.amount = 1;
          contacts.classList.add('add-contacts--not-first');

        } else if (val === 0 && target.amount === 1) {

          target.amount = 0;
          contacts.classList.remove('add-contacts--not-first');

        } else {

          target.amount = val;

        }

        return true;

      }

    });

    // Create "add contacts" section

    const contacts = document.createElement('div');
    contacts.className = 'add-contacts edit-form__add-contacts';

    function createContactField(option = '', value = '') {

      const wrapper = document.createElement('div');
      wrapper.className = 'new-contact add-contacts__new-contact';

      const select = document.createElement('select');
      select.className = 'new-contact__type';

      function createOption(text) {

        const option = document.createElement('option');
        option.text = text;

        return option;

      }

      select.append(createOption('Телефон'));
      select.append(createOption('E-mail'));
      select.append(createOption('VK'));
      select.append(createOption('Facebook'));
      select.append(createOption('Другое'));

      select.value = contactIdToText[option];

      const input = document.createElement('input');
      input.className = value ? 'new-contact__data' : 'new-contact__data';
      input.type = 'text';
      input.placeholder = 'Введите данные';
      input.value = value;

      const removeButton = document.createElement('button');
      removeButton.className = 'btn new-contact__remove-btn';

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '16');
      svg.setAttribute('height', '16');
      svg.setAttribute('viewBox', '0 0 16 16');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z');
      path.setAttribute('fill', '#B0B0B0');

      svg.append(path);
      removeButton.append(svg);

      removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.remove();
        contactsProxy.amount--;
      });

      contactsProxy.amount++;

      wrapper.append(select, input, removeButton);

      return wrapper;

    }

    if (client) {
      client.contacts.forEach(contact => contacts.append(createContactField(contact.type, contact.value)));
    }

    // Add "add contact" button

    const addContactButton = document.createElement('button');
    addContactButton.className = 'btn add-contacts__btn';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M7.99992 4.66671C7.63325 4.66671 7.33325 4.96671 7.33325 5.33337V7.33337H5.33325C4.96659 7.33337 4.66659 7.63337 4.66659 8.00004C4.66659 8.36671 4.96659 8.66671 5.33325 8.66671H7.33325V10.6667C7.33325 11.0334 7.63325 11.3334 7.99992 11.3334C8.36659 11.3334 8.66659 11.0334 8.66659 10.6667V8.66671H10.6666C11.0333 8.66671 11.3333 8.36671 11.3333 8.00004C11.3333 7.63337 11.0333 7.33337 10.6666 7.33337H8.66659V5.33337C8.66659 4.96671 8.36659 4.66671 7.99992 4.66671ZM7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.6799 1.33337 7.99992 1.33337ZM7.99992 13.3334C5.05992 13.3334 2.66659 10.94 2.66659 8.00004C2.66659 5.06004 5.05992 2.66671 7.99992 2.66671C10.9399 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.9399 13.3334 7.99992 13.3334Z');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('clip-rule', 'evenodd');
    path.setAttribute('fill', '#9873FF');

    svg.append(path);

    const buttonText = document.createElement('span');
    buttonText.className = 'add-contacts__btn-text';
    buttonText.textContent = 'Добавить контакт';

    addContactButton.append(svg, buttonText);
    addContactButton.addEventListener('click', (e) => {
      e.preventDefault();
      contacts.insertBefore(createContactField(), addContactButton);
    });

    contacts.append(addContactButton);

    // Add save and remove buttons

    const formButtons = document.createElement('div');
    formButtons.className = 'edit-form__btns';

    const saveButton = document.createElement('button');
    saveButton.className = 'btn edit-form__save-btn';
    saveButton.type = 'submit';
    saveButton.textContent = 'Сохранить';

    const removeButton = document.createElement('button');
    removeButton.className = 'btn edit-form__remove-btn';
    removeButton.textContent = 'Удалить клиента';

    formButtons.append(saveButton, removeButton);

    removeButton.addEventListener('click', (e) => {

      e.preventDefault();
      deleteClient(client.id);

      wrapper.remove();
      document.body.style.removeProperty('overflow');

    });

    // Add close button

    const closeButton = document.createElement('button');
    closeButton.className = 'btn edit-form__close-btn';

    const crossSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    crossSvg.setAttribute('width', '29');
    crossSvg.setAttribute('height', '29');
    crossSvg.setAttribute('viewBox', '0 0 29 29');
    crossSvg.setAttribute('fill', 'none');
    crossSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const crossPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    crossPath.setAttribute('d', 'M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z');
    crossPath.setAttribute('fill-rule', 'evenodd');
    crossPath.setAttribute('clip-rule', 'evenodd');
    crossPath.setAttribute('fill', '#B0B0B0');

    crossSvg.append(crossPath);
    closeButton.append(crossSvg);

    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      wrapper.remove();
      document.body.style.removeProperty('overflow');
    });

    // Add everything to the form

    form.append(formText, fields, contacts, formButtons, closeButton);
    form.addEventListener('submit', async (e) => {

      e.preventDefault();

      const data = {
        id: client ? client.id : '',
        surname: surname.input.value,
        name: name.input.value,
        lastName: lastName.input.value,
        contacts: [],
      };

      contacts.querySelectorAll('.add-contacts__new-contact').forEach(contact => {
        const type = contactTextToId[contact.querySelector('select').value];
        const value = contact.querySelector('input').value;
        data.contacts.push({ type, value });
      });

      if (client) {
        await editClient(data);
      } else {
        await addClient(data);
      }

      wrapper.remove();
      document.body.style.removeProperty('overflow');

    });

    wrapper.append(form);
    wrapper.addEventListener('click', (e) => {

      if (e.target === wrapper) {
        wrapper.remove();
        document.body.style.removeProperty('overflow');
      }

    });

    return wrapper;

  }

  document.addEventListener('DOMContentLoaded', async () => {

    const clients = await getClients();

    document.body.append(createHeader());
    document.body.append(createCRM(clients));

  });

})();
